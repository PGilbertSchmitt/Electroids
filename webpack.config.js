const path = require("path");

module.exports = {
    context: __dirname,
    entry: "./src/renderer.ts",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["*", ".js", ".ts"]
    },
    devtool: 'source-maps',
    module: {
        loaders: [
            {
                test: [
                    /\.ts$/
                ],
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            }
        ]
    },
    node: {
        fs: "empty"
    }
};