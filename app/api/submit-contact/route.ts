import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Add timestamp
    const submission = {
      ...formData,
      submittedAt: new Date().toISOString(),
      id: Date.now().toString()
    };

    // Create PDF-like HTML content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            background-color: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #0d9488;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .header h1 {
            color: #0d9488;
            margin: 0;
            font-size: 28px;
          }
          .header p {
            color: #666;
            margin: 5px 0 0 0;
          }
          .field {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f9fafb;
            border-left: 4px solid #0d9488;
          }
          .field-label {
            font-weight: bold;
            color: #374151;
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 5px;
          }
          .field-value {
            color: #1f2937;
            font-size: 16px;
            margin-top: 5px;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Contact Form Submission</h1>
            <p>District Bar Association Tando Muhammad Khan</p>
          </div>

          <div class="field">
            <div class="field-label">Full Name</div>
            <div class="field-value">${formData.fullName}</div>
          </div>

          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value">${formData.email}</div>
          </div>

          <div class="field">
            <div class="field-label">Phone Number</div>
            <div class="field-value">${formData.phone}</div>
          </div>

          <div class="field">
            <div class="field-label">Area of Law</div>
            <div class="field-value">${formData.legalArea}</div>
          </div>

          <div class="field">
            <div class="field-label">Subject</div>
            <div class="field-value">${formData.subject}</div>
          </div>

          <div class="field">
            <div class="field-label">Preferred Contact Method</div>
            <div class="field-value">${formData.preferredContact}</div>
          </div>

          <div class="field">
            <div class="field-label">Message</div>
            <div class="field-value">${formData.message}</div>
          </div>

          <div class="footer">
            <p>This form was submitted on ${new Date().toLocaleString()}</p>
            <p>District Bar Association Tando Muhammad Khan</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Save to JSON file
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'submissions.json');

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing submissions
    let submissions = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      submissions = JSON.parse(fileContent);
    }

    // Add new submission
    submissions.unshift(submission); // Add to beginning of array

    // Save to file
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully. Thank you for contacting us!'
    });

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form', error: String(error) },
      { status: 500 }
    );
  }
}
