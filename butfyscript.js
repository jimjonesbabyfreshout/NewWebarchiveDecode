// Define data object
const dataObj = { completed: false, id: 1, title: "delectus aut autem", userId: 1 };

// Convert data object to JSON string
const dataJson = JSON.stringify(dataObj);

// Define options for beautification
const options = { indent_size: 2, space_in_empty_paren: true };

// Load js_beautify script from CDN
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/js-beautify@1.15.1/beautify.min.js';
script.onload = function() {
    // Beautify JSON string
    const beautifiedJson = js_beautify(dataJson, options);

    // Log beautified JSON string
    console.log(beautifiedJson);
};
document.head.appendChild(script);