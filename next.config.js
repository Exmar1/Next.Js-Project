/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['courses-top.ru'],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		return config
	},
}

module.exports = nextConfig
