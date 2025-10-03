import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'team-members.json');

// GET - Fetch all team members
export async function GET() {
  try {
    if (!fs.existsSync(dataFile)) {
      return NextResponse.json({ members: [] });
    }
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    return NextResponse.json({ members: data });
  } catch (error) {
    console.error('Error loading team members:', error);
    return NextResponse.json({ members: [] }, { status: 500 });
  }
}

// POST - Add/Update team member
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, name, position, photo, email, phone, order } = body;

    let members = [];
    if (fs.existsSync(dataFile)) {
      members = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    }

    if (id) {
      // Update existing
      const index = members.findIndex((m: any) => m.id === id);
      if (index !== -1) {
        members[index] = { ...members[index], name, position, photo, email, phone, order };
      }
    } else {
      // Add new
      const newMember = {
        id: Date.now().toString(),
        name,
        position,
        photo,
        email,
        phone,
        order: order || members.length,
        addedAt: new Date().toISOString()
      };
      members.push(newMember);
    }

    // Sort by order
    members.sort((a: any, b: any) => a.order - b.order);

    const dir = path.dirname(dataFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(dataFile, JSON.stringify(members, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving team member:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

// DELETE - Remove team member
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!fs.existsSync(dataFile)) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    let members = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    members = members.filter((m: any) => m.id !== id);

    fs.writeFileSync(dataFile, JSON.stringify(members, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting team member:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
