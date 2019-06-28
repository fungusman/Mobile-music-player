var path = require("path");

module.exports = {
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "main.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }]
    }
}