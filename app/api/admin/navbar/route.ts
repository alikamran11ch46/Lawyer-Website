import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'navbar-links.json');

// GET - Fetch navbar links
export async function GET() {
  try {
    if (!fs.existsSync(dataFile)) {
      return NextResponse.json({ links: [] });
    }
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    return NextResponse.json({ links: data });
  } catch (error) {
    console.error('Error loading navbar links:', error);
    return NextResponse.json({ links: [] }, { status: 500 });
  }
}

// POST - Update navbar links
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { links } = body;

    const dir = path.dirname(dataFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(dataFile, JSON.stringify(links, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating navbar:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
