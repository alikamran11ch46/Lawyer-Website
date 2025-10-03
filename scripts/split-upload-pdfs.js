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

async function splitPDF(inputPath, outputDir, maxPages = 50) {
  try {
    console.log(`\n📄 Loading PDF: ${path.basename(inputPath)}...`);

    const existingPdfBytes = await fs.readFile(inputPath);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const totalPages = pdfDoc.getPageCount();

    console.log(`   Total pages: ${totalPages}`);
    console.log(`   Splitting into parts (${maxPages} pages each)...`);

    const parts = [];
    const numParts = Math.ceil(totalPages / maxPages);

    for (let i = 0; i < numParts; i++) {
      const startPage = i * maxPages;
      const endPage = Math.min((i + 1) * maxPages, totalPages);

      console.log(`   Creating part ${i + 1}/${numParts} (pages ${startPage + 1}-${endPage})...`);

      // Create new PDF for this part
      const partDoc = await PDFDocument.create();

      // Copy pages
      const pages = await partDoc.copyPages(pdfDoc, Array.from({ length: endPage - startPage }, (_, idx) => startPage + idx));
      pages.forEach(page => partDoc.addPage(page));

      // Save part
      const partBytes = await partDoc.save();
      const fileName = path.basename(inputPath, '.pdf');
      const partPath = path.join(outputDir, `${fileName}-part${i + 1}.pdf`);

      await fs.writeFile(partPath, partBytes);

      const sizeMB = (partBytes.length / 1024 / 1024).toFixed(2);
      console.log(`   ✓ Part ${i + 1}: ${sizeMB} MB`);

      parts.push({
        path: partPath,
        size: partBytes.length,
        partNumber: i + 1,
        totalParts: numParts
      });
    }

    return parts;
  } catch (error) {
    console.error(`   ✗ Error splitting PDF:`, error.message);
    return null;
  }
}

async function uploadToCloudinary(filePath, folder) {
  try {
    const fileName = path.basename(filePath, '.pdf');
    console.log(`\n☁️  Uploading ${path.basename(filePath)} to Cloudinary...`);

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
  console.log('🚀 Starting PDF Split & Upload...\n');
  console.log('================================================');

  const lawBooksDir = path.join(__dirname, '../public/law-books/law-books');
  const tempDir = path.join(__dirname, '../temp-split');

  // Create temp directory
  try {
    await fs.mkdir(tempDir, { recursive: true });
  } catch (err) {
    // Directory already exists
  }

  const pdfsToSplit = [
    {
      input: path.join(lawBooksDir, 'constitutional-history-pakistan.pdf'),
      folder: 'law-books/law-books',
      maxPages: 100 // Adjust to keep under 10MB
    },
    {
      input: path.join(lawBooksDir, 'fundamental-law-pakistan.pdf'),
      folder: 'law-books/law-books',
      maxPages: 60 // Smaller parts for larger file
    }
  ];

  const uploadedUrls = [];

  for (const pdf of pdfsToSplit) {
    console.log(`\n📋 Processing: ${path.basename(pdf.input)}`);
    console.log('================================================');

    // Split PDF
    const parts = await splitPDF(pdf.input, tempDir, pdf.maxPages);

    if (!parts) {
      continue;
    }

    // Upload each part
    for (const part of parts) {
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (part.size > maxSize) {
        console.log(`   ⚠️  Part ${part.partNumber} still too large (${(part.size / 1024 / 1024).toFixed(2)} MB)`);
        console.log(`   💡 Need to reduce pages per part further`);
        continue;
      }

      const url = await uploadToCloudinary(part.path, pdf.folder);
      if (url) {
        uploadedUrls.push({
          originalFile: path.basename(pdf.input),
          partNumber: part.partNumber,
          totalParts: part.totalParts,
          url: url
        });
      }
    }
  }

  console.log('\n\n================================================');
  console.log('✅ Split & Upload Complete!');
  console.log(`   ✓ Successfully uploaded: ${uploadedUrls.length} parts`);
  console.log('\n📝 Uploaded URLs:');
  uploadedUrls.forEach(item => {
    console.log(`   ${item.originalFile} - Part ${item.partNumber}/${item.totalParts}`);
    console.log(`   ${item.url}\n`);
  });
  console.log('================================================');

  // Save URLs to JSON
  const urlsPath = path.join(__dirname, 'split-pdfs-urls.json');
  await fs.writeFile(urlsPath, JSON.stringify(uploadedUrls, null, 2));
  console.log(`\n💾 URLs saved to: ${urlsPath}`);

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
