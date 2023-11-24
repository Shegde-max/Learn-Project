const fs = require('fs');

// Function to compare two JSON objects
function compareJSONObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// Load test result files
const file1 = fs.readFileSync('./test-results-main.json', 'utf8');
const file2 = fs.readFileSync('./test-results-current.json', 'utf8');

// Parse JSON content
const data1 = JSON.parse(file1);
const data2 = JSON.parse(file2);

// Compare the JSON content
const comparisonResult = compareJSONObjects(data1, data2);

if (comparisonResult) {
    console.log('Test result files are identical.');
} else {
    console.log('Test result files differ.');
}