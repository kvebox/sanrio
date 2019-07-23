const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'sanrio.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.txt$/i,
            use: 'raw-loader',
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            use: 'file-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.css', '.txt', '.png', '*']
    },
    devtool: 'inline-source-map'
};