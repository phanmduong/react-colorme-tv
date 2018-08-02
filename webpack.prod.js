const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    output: {
        publicPath: "/tv-dashboard/"
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                oneOf: [
                    {
                        exclude: /node_modules|globalStyles\.less/,
                        use: [MiniCssExtractPlugin.loader, {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                modules: true,
                                localIdentName: '__[hash:base64:5]',
                            },

                        }, {
                            loader: "less-loader", options: {
                                javascriptEnabled: true,
                            }
                        }]
                    },
                    {
                        include: /node_modules|globalStyles\.less/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            {
                                loader: "less-loader", options: {
                                    javascriptEnabled: true,
                                }
                            }
                        ]
                    },
                ],
            },
        ]
    },
    // devtool: 'source-map'
});
