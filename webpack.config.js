import path from "path";

const config = {
    entry: "./index.html",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.js$/, use: ["babel-loader"] }
        ]
    }
};

export default config;