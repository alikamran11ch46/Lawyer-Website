const fs = require('fs').promises;
const path = require('path');

// Files uploaded to Cloudinary (from cloudinary-mapping.json)
const uploadedFiles = require('./cloudinary-mapping.json');
const splitPDFs = require('./split-pdfs-urls.json');

async function deleteUploadedFiles() {
  console.log('🗑️  Starting cleanup of uploaded files...\n');
  console.log('================================================');

  let deletedCount = 0;
  let failedCount = 0;
  let totalSize = 0;

  // Delete files from cloudinary-mapping.json
  console.log('\n📋 Deleting files uploaded to Cloudinary...\n');

  for (const [filePath, cloudinaryUrl] of Object.entries(uploadedFiles)) {
    try {
      const stats = await fs.stat(filePath);
      totalSize += stats.size;

      await fs.unlink(filePath);
      console.log(`✓ Deleted: ${path.basename(filePath)}`);
      deletedCount++;
    } catch (error) {
      console.log(`✗ Failed to delete: ${path.basename(filePath)} - ${error.message}`);
      failedCount++;
    }
  }

  // Delete original large PDFs (since we have split versions)
  console.log('\n📋 Deleting original large PDFs (split versions uploaded)...\n');

  const largePDFs = [
    path.join(__dirname, '../public/law-books/law-books/constitutional-history-pakistan.pdf'),
    path.join(__dirname, '../public/law-books/law-books/fundamental-law-pakistan.pdf')
  ];

  for (const pdfPath of largePDFs) {
    try {
      const stats = await fs.stat(pdfPath);
      totalSize += stats.size;

      await fs.unlink(pdfPath);
      console.log(`✓ Deleted: ${path.basename(pdfPath)}`);
      deletedCount++;
    } catch (error) {
      console.log(`✗ Failed to delete: ${path.basename(pdfPath)} - ${error.message}`);
      failedCount++;
    }
  }

  // Clean up empty directories
  console.log('\n📋 Cleaning up empty directories...\n');

  const dirsToCheck = [
    path.join(__dirname, '../public/team'),
    path.join(__dirname, '../public/campaigns'),
    path.join(__dirname, '../public/circulars'),
    path.join(__dirname, '../public/press-release'),
    path.join(__dirname, '../public/policy'),
    path.join(__dirname, '../public/publications'),
    path.join(__dirname, '../public/law-books/law-books'),
    path.join(__dirname, '../public/law-books'),
    path.join(__dirname, '../public/svgicon'),
  ];

  for (const dir of dirsToCheck) {
    try {
      const files = await fs.readdir(dir);
      if (files.length === 0) {
        await fs.rmdir(dir);
        console.log(`✓ Removed empty directory: ${path.basename(dir)}`);
      } else {
        console.log(`ℹ️  Kept directory (not empty): ${path.basename(dir)}`);
      }
    } catch (error) {
      // Directory doesn't exist or can't be deleted
    }
  }

  console.log('\n================================================');
  console.log('✅ Cleanup Complete!');
  console.log(`   ✓ Files deleted: ${deletedCount}`);
  console.log(`   ✗ Failed: ${failedCount}`);
  console.log(`   💾 Space freed: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log('================================================\n');

  // List remaining files in public
  console.log('📂 Remaining files in /public:\n');
  const publicDir = path.join(__dirname, '../public');
  await listDirectory(publicDir, '');
}

async function listDirectory(dir, indent) {
  try {
    const items = await fs.readdir(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stats = await fs.stat(fullPath);

      if (stats.isDirectory()) {
        console.log(`${indent}📁 ${item}/`);
        await listDirectory(fullPath, indent + '  ');
      } else {
        const sizeMB = (stats.size / 1024).toFixed(2);
        console.log(`${indent}📄 ${item} (${sizeMB} KB)`);
      }
    }
  } catch (error) {
    // Ignore errors
  }
}

deleteUploadedFiles().catch(console.error);
