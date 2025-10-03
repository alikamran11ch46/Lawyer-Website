import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { id } = await request.json();
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    let submissions = JSON.parse(fileContent);

    // Remove submission with matching id
    submissions = submissions.filter((sub: any) => sub.id !== id);

    // Save updated submissions
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting submission:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
