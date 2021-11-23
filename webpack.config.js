const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader","css-loader","sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
};