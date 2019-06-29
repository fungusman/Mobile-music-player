const webpackHtmlPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const webpack = require("webpack");
const loadPresets = require("./build-utils/loadPresets");

const configMode = (mode) => {
    return require(`./build-utils/webpack.${mode}.js`);
}

module.exports = ({ mode, presets }) => {
    return webpackMerge({
        mode, 
        entry: "./src/index.js",
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }]
        },
        plugins: [
            new webpackHtmlPlugin({
                template: "./index.html"
            }),
            new webpack.ProgressPlugin()
        ]
    }, 
        configMode(mode),
        loadPresets(presets)
    )
}