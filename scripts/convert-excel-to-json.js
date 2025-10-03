const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const excelFilePath = 'd:/practice center websites/Bar Council Tando M Khan/supporting docs/dummy_advocates.xlsx';
const workbook = XLSX.readFile(excelFilePath);

// Get the first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON
const jsonData = XLSX.utils.sheet_to_json(worksheet);

// Write to JSON file in public folder
const outputPath = path.join(__dirname, '../public/advocates-data.json');
fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2));

console.log(`Converted ${jsonData.length} records to JSON`);
console.log('Output file:', outputPath);
