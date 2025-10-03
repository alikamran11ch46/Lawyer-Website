const { PDFDocument } = require('pdf-lib');
const fs = require('fs').promises;
const path = require('path');
const cloudinary = require('cloudinary').v2;

// Load environment variables
require('dotenv').config({ path: '.env.local' });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function compressPDF(inputPath, outputPath) {
  try {
    console.log(`\n📄 Loading PDF: ${path.basename(inputPath)}...`);

    // Read the PDF file
    const existingPdfBytes = await fs.readFile(inputPath);

    console.log(`   Original size: ${(existingPdfBytes.length / 1024 / 1024).toFixed(2)} MB`);

    // Load the PDF
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    console.log(`   Total pages: ${pdfDoc.getPageCount()}`);
    console.log(`   Compressing...`);

    // Save with compression
    const compressedPdfBytes = await pdfDoc.save({
      useObjectStreams: false,
      addDefaultPage: false,
    });

    console.log(`   Compressed size: ${(compressedPdfBytes.length / 1024 / 1024).toFixed(2)} MB`);

    // Write compressed PDF
    await fs.writeFile(outputPath, compressedPdfBytes);

    const savings = ((1 - compressedPdfBytes.length / existingPdfBytes.length) * 100).toFixed(1);
    console.log(`   ✓ Saved ${savings}% space`);

    return compressedPdfBytes.length;
  } catch (error) {
    console.error(`   ✗ Error compressing PDF:`, error.message);
    return null;
  }
}

async function uploadToCloudinary(filePath, folder) {
  try {
    const fileName = path.basename(filePath, '.pdf');
    console.log(`\n☁️  Uploading to Cloudinary...`);

    const result = await cloudinary.uploader.upload(filePath, {
      folder: `bar-council/${folder}`,
      resource_type: 'raw',
      public_id: fileName,
      overwrite: true
    });

    console.log(`   ✓ Uploaded: ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error(`   ✗ Upload failed:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Starting PDF Compression & Upload...\n');
  console.log('================================================');

  const lawBooksDir = path.join(__dirname, '../public/law-books/law-books');
  const tempDir = path.join(__dirname, '../temp-compressed');

  // Create temp directory
  try {
    await fs.mkdir(tempDir, { recursive: true });
  } catch (err) {
    // Directory already exists
  }

  const pdfsToCompress = [
    {
      input: path.join(lawBooksDir, 'constitutional-history-pakistan.pdf'),
      output: path.join(tempDir, 'constitutional-history-pakistan.pdf'),
      folder: 'law-books/law-books'
    },
    {
      input: path.join(lawBooksDir, 'fundamental-law-pakistan.pdf'),
      output: path.join(tempDir, 'fundamental-law-pakistan.pdf'),
      folder: 'law-books/law-books'
    }
  ];

  let totalSuccess = 0;
  let totalFailed = 0;

  for (const pdf of pdfsToCompress) {
    console.log(`\n📋 Processing: ${path.basename(pdf.input)}`);
    console.log('================================================');

    // Compress
    const compressedSize = await compressPDF(pdf.input, pdf.output);

    if (!compressedSize) {
      totalFailed++;
      continue;
    }

    // Check if still too large (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (compressedSize > maxSize) {
      console.log(`   ⚠️  Still too large (${(compressedSize / 1024 / 1024).toFixed(2)} MB)`);
      console.log(`   💡 Trying alternative: Splitting or using external host`);
      console.log(`   ℹ️  For now, keeping original file locally`);
      totalFailed++;
      continue;
    }

    // Upload to Cloudinary
    const url = await uploadToCloudinary(pdf.output, pdf.folder);

    if (url) {
      totalSuccess++;
    } else {
      totalFailed++;
    }
  }

  console.log('\n\n================================================');
  console.log('✅ Compression & Upload Complete!');
  console.log(`   ✓ Successfully uploaded: ${totalSuccess} files`);
  console.log(`   ✗ Failed: ${totalFailed} files`);
  console.log('================================================');

  // Cleanup temp directory
  try {
    const files = await fs.readdir(tempDir);
    for (const file of files) {
      await fs.unlink(path.join(tempDir, file));
    }
    await fs.rmdir(tempDir);
    console.log('\n🧹 Cleaned up temporary files');
  } catch (err) {
    // Ignore cleanup errors
  }
}

main().catch(console.error);
