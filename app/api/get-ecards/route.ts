import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'ecard-requests.json');

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ requests: [] });
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const requests = JSON.parse(fileContent);

    return NextResponse.json({ requests });
  } catch (error) {
    console.error('Error reading E-Card requests:', error);
    return NextResponse.json({ requests: [] }, { status: 500 });
  }
}
