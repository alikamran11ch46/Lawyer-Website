const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Track uploaded files
const uploadedFiles = {};

// Function to upload a single file
async function uploadFile(filePath, folder = '') {
  try {
    const fileName = path.basename(filePath);
    const ext = path.extname(filePath).toLowerCase();

    // Determine resource type
    let resourceType = 'image';
    if (['.mp4', '.mov', '.avi', '.webm'].includes(ext)) {
      resourceType = 'video';
    } else if (['.pdf', '.doc', '.docx', '.json', '.txt'].includes(ext)) {
      resourceType = 'raw';
    }

    console.log(`Uploading ${fileName} to folder: ${folder || 'root'}...`);

    const result = await cloudinary.uploader.upload(filePath, {
      folder: `bar-council/${folder}`,
      resource_type: resourceType,
      use_filename: true,
      unique_filename: false
    });

    uploadedFiles[filePath] = result.secure_url;
    console.log(`✓ Uploaded: ${fileName} -> ${result.secure_url}`);
    return result;
  } catch (error) {
    console.error(`✗ Failed to upload ${filePath}:`, error.message);
    return null;
  }
}

// Function to recursively get all files in a directory
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Main upload function
async function uploadAllFiles() {
  console.log('🚀 Starting Cloudinary upload process...\n');

  const publicDir = path.join(__dirname, '../public');

  // Get all files from public directory
  const allFiles = getAllFiles(publicDir);

  // Filter out unwanted files
  const filesToUpload = allFiles.filter(file => {
    const fileName = path.basename(file);
    const ext = path.extname(file).toLowerCase();

    // Skip specific files
    if (fileName === 'robots.txt' || fileName === 'advocates-data.json') {
      return false;
    }

    // Only upload media files
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.mp4', '.mov', '.pdf', '.json'];
    return allowedExtensions.includes(ext);
  });

  console.log(`Found ${filesToUpload.length} files to upload\n`);

  // Upload files with progress tracking
  let uploaded = 0;
  let failed = 0;

  for (const file of filesToUpload) {
    // Get relative path for folder structure
    const relativePath = path.relative(publicDir, file);
    let folderPath = path.dirname(relativePath).replace(/\\/g, '/');

    // Fix: Replace "." with empty string for root files
    if (folderPath === '.') {
      folderPath = '';
    }

    const result = await uploadFile(file, folderPath);

    if (result) {
      uploaded++;
    } else {
      failed++;
    }

    // Progress indicator
    console.log(`Progress: ${uploaded + failed}/${filesToUpload.length}\n`);
  }

  // Save mapping to JSON file
  const mappingPath = path.join(__dirname, 'cloudinary-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(uploadedFiles, null, 2));

  console.log('\n✅ Upload Complete!');
  console.log(`✓ Successfully uploaded: ${uploaded} files`);
  console.log(`✗ Failed: ${failed} files`);
  console.log(`\n📄 URL mapping saved to: ${mappingPath}`);
}

// Run the upload
uploadAllFiles().catch(console.error);
