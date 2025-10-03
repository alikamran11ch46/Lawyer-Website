import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { file, fileName, folder } = body;

    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', folder || '');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const ext = fileName.split('.').pop();
    const newFileName = `${timestamp}.${ext}`;
    const filePath = path.join(uploadsDir, newFileName);

    // Remove base64 prefix if present
    const base64Data = file.replace(/^data:.*;base64,/, '');

    // Write file
    fs.writeFileSync(filePath, base64Data, 'base64');

    // Return public URL
    const publicUrl = `/uploads/${folder ? folder + '/' : ''}${newFileName}`;

    return NextResponse.json({ success: true, url: publicUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ success: false, error: 'Upload failed' }, { status: 500 });
  }
}
