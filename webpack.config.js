const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.tsx',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
        historyApiFallback: true,
        host: 'localhost',
        port: 3001,
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(scss|css)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.(woff2?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    mimetype: 'application/font-woff',
                    name: './fonts/[hash].[ext]',
                },
            },
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                loader: 'file-loader'
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new HtmlWebPackPlugin({
            template: './public/404.html',
            filename: './404.html',
        }),
        new CopyWebpackPlugin([{ from: 'public/CNAME' }])
    ],
};
