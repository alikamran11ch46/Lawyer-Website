import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ submissions: [] });
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const submissions = JSON.parse(fileContent);

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('Error reading submissions:', error);
    return NextResponse.json({ submissions: [] }, { status: 500 });
  }
}
