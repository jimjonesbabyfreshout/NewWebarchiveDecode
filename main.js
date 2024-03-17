"use strict";

import webarchive from "node-webarchive";
import { fromString as htmlToText } from "html-to-text";
import { promises as fs } from "fs";

const decodeiOSWebarchiveToPlainText = async function (path) {
    try {
        const data = await fs.readFile(path);
        const decodedData = await webarchive.decode(data);
        const plainText = htmlToText(decodedData.toString(), {
            wordwrap: false,
            ignoreImage: true
        });
        return plainText;
    } catch (error) {
        throw new Error("An error occurred while decoding the iOS webarchive file.");
    }
};

const form = {
    addEventListener: function(event, callback) {
        // Placeholder for form submission handling
    }
};

const result = {
    textContent: ""
};

const alert = function(message) {
    console.log(message);
};

const filePath = "file/path";

const event = {
    preventDefault: function() {
        // Placeholder for prevent default logic
    }
};

const setTextContent = function(content) {
    // Placeholder for setting text content logic
    console.log(content);
};

const processWebarchive = async function () {
    try {
        const decodedText = await decodeiOSWebarchiveToPlainText(filePath);
        setTextContent(decodedText);
    } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred while decoding the iOS webarchive file.");
    }
};

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    // Placeholder for form submission handling
});

processWebarchive();