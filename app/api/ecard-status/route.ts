import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ request: null }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'data', 'ecard-requests.json');

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ request: null });
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const requests = JSON.parse(fileContent);

    const ecardRequest = requests.find((req: any) => req.id === id);

    return NextResponse.json({ request: ecardRequest || null });
  } catch (error) {
    console.error('Error fetching E-Card status:', error);
    return NextResponse.json({ request: null }, { status: 500 });
  }
}
