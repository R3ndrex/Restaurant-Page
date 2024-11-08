const common = require("./webpack.common.js");
const { default: merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
});
