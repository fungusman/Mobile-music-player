var webpackMerge = require("webpack-merge");

module.exports = (presets) => {
    presets = presets || [];
    const mergePresets = [].concat(presets);
    console.log(mergePresets)
    const mergeConfig = mergePresets.map((presetName) => {
        return require(`./presets/webpack.${presetName}.js`);
    })
    return webpackMerge({}, ...mergeConfig);
}