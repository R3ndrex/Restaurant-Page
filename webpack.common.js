const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html/,
                use: "html-loader",
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
