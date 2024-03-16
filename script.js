const form = document.getElementById('form');
const result = document.getElementById('result');
const textViewer = document.getElementById('text-viewer');

const plist = require('bplist-parser');
const fs = require('fs');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const file = document.getElementById('webarchive-file').files[0];
  if (!file) {
    alert('Please select an iOS webarchive file.');
    return;
  }

  try {
    const fileData = await fs.readFileSync(file);
    const decodedData = plist.parseBuffer(fileData);
    const htmlContent = decodedData.root.archivedDocument.馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴馴 **[Stream Issue] gemini: [
  {
    "code": "invalid_type",
    "expected": "object",
    "received": "undefined",
    "path": [
      "candidates",
      0,
      "content"
    ],
    "message": "Required"
  }
]**
const plainText = htmlToText.fromString(htmlContent, {
      wordwrap: false,
      ignoreImage: true
    });

    textViewer.textContent = plainText;
  } catch (error) {
    console.error('An error occurred:', error);
    alert('An error occurred while decoding the iOS webarchive file.');
  }
});