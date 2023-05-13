const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    output: {
        path: path.join(__dirname, "/dist"), // this is where the bundle is outputted
        filename: "bundle.js", // the name of the bundle file
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html", // links index.js to index.html
        }),
    ],
    devServer: {
        port: 8888,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // match all .js and .jsx files for bundlling
                exclude: /node_modules/, // excludes all files from inside the node_modules dir from the bundle
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/, // match all .sass, .scss, .css files for bundling
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, // matches image and font files for bundling
                loader: "url-loader",
                options: { limit: false },
            },
        ],
    },
};
