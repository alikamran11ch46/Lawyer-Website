import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'circulars.json');

// GET - Fetch all circulars
export async function GET() {
  try {
    if (!fs.existsSync(dataFile)) {
      return NextResponse.json({ circulars: [] });
    }
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    return NextResponse.json({ circulars: data });
  } catch (error) {
    console.error('Error loading circulars:', error);
    return NextResponse.json({ circulars: [] }, { status: 500 });
  }
}

// POST - Add new circular
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, date, fileUrl, category } = body;

    let circulars = [];
    if (fs.existsSync(dataFile)) {
      circulars = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    }

    const newCircular = {
      id: Date.now().toString(),
      title,
      date,
      fileUrl,
      category,
      uploadedAt: new Date().toISOString()
    };

    circulars.unshift(newCircular);

    const dir = path.dirname(dataFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(dataFile, JSON.stringify(circulars, null, 2));

    return NextResponse.json({ success: true, circular: newCircular });
  } catch (error) {
    console.error('Error adding circular:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

// DELETE - Remove circular
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!fs.existsSync(dataFile)) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    let circulars = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    circulars = circulars.filter((c: any) => c.id !== id);

    fs.writeFileSync(dataFile, JSON.stringify(circulars, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting circular:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
