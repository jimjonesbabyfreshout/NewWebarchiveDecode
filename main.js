const webarchive = require('node-webarchive');
const htmlToText = require('html-to-text');
const fs = require('fs');

const textViewer = document.getElementById('text-viewer');
textViewer.style.overflow = 'scroll';

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const file = document.getElementById('webarchive-file').files[0];
  if (!file) {
    alert('Please select an iOS webarchive file.');
    return;
  }

  try {
    const plainText = await decodeiOSWebarchiveToPlainText(file);
    result.textContent = plainText;
  } catch (error) {
    console.error('An error occurred:', error);
    alert('An error occurred while decoding the iOS webarchive file.');
  }
});

async function decodeiOSWebarchiveToPlainText(file) {
  const fileData = fs.readFileSync(file.path);
  const decodedData = await webarchive.decode(fileData);
  const htmlContent = decodedData.toString();
  const plainText = htmlToText.fromString(htmlContent, {
    wordwrap: false,
    ignoreImage: true
  });

  return plainText;
}