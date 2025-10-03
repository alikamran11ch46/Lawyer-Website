import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const id = Date.now().toString();
    const ecardRequest = {
      id,
      ...formData,
      status: 'pending',
      submittedAt: new Date().toISOString()
    };

    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'ecard-requests.json');

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing requests or create new array
    let requests = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      requests = JSON.parse(fileContent);
    }

    // Add new request to beginning of array
    requests.unshift(ecardRequest);

    // Save updated requests
    fs.writeFileSync(filePath, JSON.stringify(requests, null, 2));

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Error saving E-Card request:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
