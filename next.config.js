const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');
const { _moduleAliases } = require('./package.json');

module.exports = withTypescript(
	withSass({
		webpack(config) {
			Object.keys(_moduleAliases).forEach(
				alias => (config.resolve.alias[alias] = _moduleAliases[alias])
			);
			return config;
		},
		cssModules: true,
		cssLoaderOptions: {
			importLoaders: 1,
			localIdentName: '[local]___[hash:base64:5]'
		}
	})
);
