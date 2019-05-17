const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'sanrio.js',
        // path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map'
};