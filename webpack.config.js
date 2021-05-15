const path = require('path');

module.exports = {
    mode:'development',
    entry: {
      calculator:'./js/calculator.js',
      pythagore: './js/pythagore.js',
      util: './js/util.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};