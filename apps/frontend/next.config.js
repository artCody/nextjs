const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["ui"]);
const withCustomBabelConfig = require("next-plugin-custom-babel-config");
const path = require("path");

const nextConfig = {
	images: {
		domains: ["via.placeholder.com"],
	},
};

const plugins = [
	[
		withCustomBabelConfig,
		{
			babelConfigFile: path.resolve("./babel.config.js"),
			i18n: {
				locales: ["ru", "en", "hy"],
				defaultLocale: "ru",
			},
		},
	],
	[withTM],
];

module.exports = withPlugins(plugins, nextConfig);
