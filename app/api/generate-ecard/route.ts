import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import jsPDF from 'jspdf';

export async function POST(request: NextRequest) {
  try {
    const { id } = await request.json();
    const filePath = path.join(process.cwd(), 'data', 'ecard-requests.json');

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const requests = JSON.parse(fileContent);
    const ecardData = requests.find((req: any) => req.id === id);

    if (!ecardData || ecardData.status !== 'approved') {
      return NextResponse.json({ success: false }, { status: 403 });
    }

    // Create PDF
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [85.6, 54] // Credit card size
    });

    // Card Front - Modern Gradient Background
    // Dark blue to teal gradient effect with rectangles
    doc.setFillColor(15, 52, 96); // Dark blue
    doc.rect(0, 0, 85.6, 54, 'F');

    doc.setFillColor(20, 184, 166, 0.3); // Teal overlay
    doc.rect(0, 0, 85.6, 27, 'F');

    // Decorative golden strip at top
    doc.setFillColor(212, 175, 55); // Golden
    doc.rect(0, 0, 85.6, 2, 'F');

    // Bottom golden strip
    doc.setFillColor(212, 175, 55);
    doc.rect(0, 52, 85.6, 2, 'F');

    // Logo area - Try to load actual logo with golden background
    let logoAdded = false;
    const logoPath = path.join(process.cwd(), 'public', 'bar-logo-golden.svg');
    const logoPngPath = path.join(process.cwd(), 'public', 'bar-logo-card.png');

    // Golden background for logo
    doc.setFillColor(212, 175, 55);
    doc.roundedRect(4, 4, 17, 17, 1, 1, 'F');

    try {
      if (fs.existsSync(logoPngPath)) {
        const logoData = fs.readFileSync(logoPngPath);
        const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;
        doc.addImage(logoBase64, 'PNG', 5, 5, 15, 15);
        logoAdded = true;
      }
    } catch (error) {
      console.log('Logo not found, using placeholder');
    }

    if (!logoAdded) {
      // Fallback - White text on golden background
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(9);
      doc.text('DBA', 9, 13);
      doc.setFontSize(6);
      doc.text('TMK', 8.5, 16);
    }

    // Title with modern styling - adjusted for better fit
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.text('DISTRICT BAR ASSOCIATION', 23, 9);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.text('Tando Muhammad Khan', 23, 13);

    // Advocate badge
    doc.setFillColor(212, 175, 55);
    doc.roundedRect(23, 16, 28, 5, 1, 1, 'F');
    doc.setTextColor(15, 52, 96);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text('ADVOCATE E-CARD', 25, 19.5);

    // Photo with border (right side)
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(64, 4, 17, 22, 1, 1, 'F');

    // Add photo if available
    if (ecardData.photo) {
      try {
        doc.addImage(ecardData.photo, 'JPEG', 65, 5, 15, 20);
      } catch (error) {
        console.error('Error adding photo:', error);
        doc.setTextColor(100, 100, 100);
        doc.setFontSize(6);
        doc.text('PHOTO', 69, 16);
      }
    } else {
      doc.setTextColor(100, 100, 100);
      doc.setFontSize(6);
      doc.text('PHOTO', 69, 16);
    }

    // Golden frame for photo
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.5);
    doc.roundedRect(64, 4, 17, 22, 1, 1, 'S');

    // Member Details with modern layout
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text('Name:', 5, 30);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(ecardData.fullName, 20, 30);

    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text('S/O:', 5, 35);
    doc.setFont('helvetica', 'normal');
    doc.text(ecardData.fatherName, 20, 35);

    doc.setFont('helvetica', 'bold');
    doc.text('Enrollment:', 5, 40);
    doc.setFont('helvetica', 'normal');
    doc.text(ecardData.enrollment, 25, 40);

    doc.setFont('helvetica', 'bold');
    doc.text('CNIC:', 5, 45);
    doc.setFont('helvetica', 'normal');
    doc.text(ecardData.cnic, 20, 45);

    // Signature area with border
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(4, 47, 22, 5.5, 0.5, 0.5, 'F');

    // Add signature if available
    if (ecardData.signature) {
      try {
        doc.addImage(ecardData.signature, 'PNG', 5, 47.5, 20, 4.5);
      } catch (error) {
        console.error('Error adding signature:', error);
        doc.setTextColor(100, 100, 100);
        doc.setFontSize(5);
        doc.text('SIGNATURE', 10, 50.5);
      }
    } else {
      doc.setTextColor(100, 100, 100);
      doc.setFontSize(5);
      doc.text('SIGNATURE', 10, 50.5);
    }

    // Issue and Expiry dates with golden background
    doc.setFillColor(212, 175, 55);
    doc.roundedRect(50, 47, 30, 5.5, 0.5, 0.5, 'F');
    doc.setTextColor(15, 52, 96);
    doc.setFontSize(6);
    doc.setFont('helvetica', 'bold');
    doc.text(`Issue: ${ecardData.issueDate || 'N/A'}`, 51, 49);
    doc.text(`Expiry: ${ecardData.expiryDate || 'N/A'}`, 51, 51.5);

    // Add new page for back side
    doc.addPage();

    // Card Back - Modern Background
    doc.setFillColor(245, 245, 245); // Light gray
    doc.rect(0, 0, 85.6, 54, 'F');

    // Header with gradient effect
    doc.setFillColor(15, 52, 96);
    doc.rect(0, 0, 85.6, 12, 'F');

    // Golden strip on header
    doc.setFillColor(212, 175, 55);
    doc.rect(0, 11, 85.6, 1, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('ADVOCATE E-CARD', 42.8, 7, { align: 'center' });
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.text('District Bar Association - Tando Muhammad Khan', 42.8, 10, { align: 'center' });

    // Contact Information Section
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(4, 15, 55, 35, 1, 1, 'F');

    doc.setTextColor(15, 52, 96);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('Contact Information', 6, 19);

    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.3);
    doc.line(6, 20, 57, 20);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(50, 50, 50);

    // Phone icon (simple representation)
    doc.setFillColor(20, 184, 166);
    doc.circle(7.5, 24, 1.2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(5);
    doc.text('P', 7, 24.5);

    doc.setTextColor(50, 50, 50);
    doc.setFontSize(7);
    doc.text(`${ecardData.phone}`, 10, 25);

    // Email icon
    doc.setFillColor(20, 184, 166);
    doc.circle(7.5, 29, 1.2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(5);
    doc.text('E', 7, 29.5);

    doc.setTextColor(50, 50, 50);
    doc.setFontSize(6);
    const emailText = doc.splitTextToSize(ecardData.email, 47);
    doc.text(emailText, 10, 30);

    // Practice Areas
    doc.setTextColor(15, 52, 96);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('Practice Areas', 6, 36);

    doc.setDrawColor(212, 175, 55);
    doc.line(6, 37, 57, 37);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6);
    doc.setTextColor(50, 50, 50);
    const practiceAreas = doc.splitTextToSize(ecardData.practiceAreas, 50);
    doc.text(practiceAreas, 6, 40);

    // QR Code Section with modern border
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(61, 15, 20, 25, 1, 1, 'F');

    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.5);
    doc.roundedRect(61, 15, 20, 25, 1, 1, 'S');

    doc.setFillColor(240, 240, 240);
    doc.roundedRect(63, 17, 16, 16, 0.5, 0.5, 'F');
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(5);
    doc.text('QR CODE', 67, 25);
    doc.setFontSize(4);
    doc.text('Verification', 66, 27);

    doc.setTextColor(15, 52, 96);
    doc.setFontSize(5);
    doc.setFont('helvetica', 'bold');
    doc.text('Scan to Verify', 67, 37.5, { align: 'center' });

    // Footer with golden background
    doc.setFillColor(212, 175, 55);
    doc.rect(0, 51, 85.6, 3, 'F');

    doc.setFontSize(5);
    doc.setTextColor(15, 52, 96);
    doc.setFont('helvetica', 'bold');
    doc.text('Property of District Bar Association, TMK', 42.8, 53, { align: 'center' });

    // Additional info
    doc.setFillColor(15, 52, 96);
    doc.setTextColor(200, 200, 200);
    doc.setFontSize(4);
    doc.setFont('helvetica', 'normal');
    doc.text('If found, please return to the Bar Council office', 42.8, 49, { align: 'center' });

    // Generate PDF buffer
    const pdfBuffer = Buffer.from(doc.output('arraybuffer'));

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=ecard-${ecardData.enrollment}.pdf`
      }
    });
  } catch (error) {
    console.error('Error generating E-Card:', error);
    return NextResponse.json({ success: false, error: 'Failed to generate PDF' }, { status: 500 });
  }
}
