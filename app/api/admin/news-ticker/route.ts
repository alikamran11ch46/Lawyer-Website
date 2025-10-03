import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'news-ticker.json');

// GET - Fetch news ticker
export async function GET() {
  try {
    if (!fs.existsSync(dataFile)) {
      return NextResponse.json({ news: 'تازہ ترین خبر: بار کونسل ٹنڈو محمد خان کی اہم اطلاع - نئے اراکین کی رجسٹریشن جاری ہے' });
    }
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    return NextResponse.json({ news: data.text });
  } catch (error) {
    console.error('Error loading news:', error);
    return NextResponse.json({ news: '' }, { status: 500 });
  }
}

// POST - Update news ticker
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text } = body;

    const newsData = {
      text,
      updatedAt: new Date().toISOString()
    };

    const dir = path.dirname(dataFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(dataFile, JSON.stringify(newsData, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating news:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
