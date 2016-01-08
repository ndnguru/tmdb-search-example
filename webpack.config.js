var path = require('path');
var webpack = require('webpack');
var outputDir = 'build';
module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, outputDir),
        filename: 'bundle.js',
        publicPath: 'http://0.0.0.0:8080/build/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loaders: ['file-loader?name=css/[name].[ext]', 'style-loader!css-loader']
            },
            {
                test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader?name=img/[name].[ext]'
            },
            {
                test: /\.(woff|ttf)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};