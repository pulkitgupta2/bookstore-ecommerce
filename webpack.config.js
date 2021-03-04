const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');


const port = process.env.PORT || 8080;

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.[hash].js",
        publicPath: '/'
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localsConvention: "camelCase",
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },

        ],
    },
    plugins: [
        new Dotenv(),

        new HtmlWebpackPlugin({
            template: "dist/index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        host: "localhost",
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".css", ".scss", ".png"],
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },

};




