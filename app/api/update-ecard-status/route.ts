import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { id, status, issueDate, expiryDate } = await request.json();
    const filePath = path.join(process.cwd(), 'data', 'ecard-requests.json');

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    let requests = JSON.parse(fileContent);

    // Update status of the matching request
    requests = requests.map((req: any) =>
      req.id === id ? { ...req, status, issueDate, expiryDate } : req
    );

    // Save updated requests
    fs.writeFileSync(filePath, JSON.stringify(requests, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating E-Card status:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
