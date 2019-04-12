require('module-alias')();
require('@babel/polyfill');
require('@babel/register')({
	presets: ['@babel/preset-env']
});
require('@babel/core').transform('code', {
	plugins: ['@babel/plugin-proposal-object-rest-spread']
});
// Import the rest of our application.
module.exports = require('./server');
