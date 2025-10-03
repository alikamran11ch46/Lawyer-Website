import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'law-books.json');

// GET - Fetch all law books
export async function GET() {
  try {
    if (!fs.existsSync(dataFile)) {
      return NextResponse.json({ books: [] });
    }
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    return NextResponse.json({ books: data });
  } catch (error) {
    console.error('Error loading books:', error);
    return NextResponse.json({ books: [] }, { status: 500 });
  }
}

// POST - Add new book
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, author, category, fileUrl, coverImage, description } = body;

    let books = [];
    if (fs.existsSync(dataFile)) {
      books = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    }

    const newBook = {
      id: Date.now().toString(),
      title,
      author,
      category,
      fileUrl,
      coverImage,
      description,
      uploadedAt: new Date().toISOString()
    };

    books.unshift(newBook);

    const dir = path.dirname(dataFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(dataFile, JSON.stringify(books, null, 2));

    return NextResponse.json({ success: true, book: newBook });
  } catch (error) {
    console.error('Error adding book:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

// DELETE - Remove book
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!fs.existsSync(dataFile)) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    let books = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    books = books.filter((b: any) => b.id !== id);

    fs.writeFileSync(dataFile, JSON.stringify(books, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting book:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
