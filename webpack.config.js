const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.txt$/i,
                use: 'raw-loader',
            }
        ]
    },
    entry: './src/index.js',
    output: {
        filename: 'sanrio.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map'
};