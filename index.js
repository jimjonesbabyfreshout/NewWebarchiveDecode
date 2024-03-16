const webarchive = require('node-webarchive');
const htmlToText = require('html-to-text');

async function decodeiOSWebarchiveToPlainText(file) {
  const fileData = await file.arrayBuffer();

  const decodedData = await webarchive.decode(fileData);
  const htmlContent = decodedData.toString();

  const plainText = htmlToText.fromString(htmlContent, {
    wordwrap: false,
    ignoreImage: true
  });

  return plainText;
}

module.exports = decodeiOSWebarchiveToPlainText;