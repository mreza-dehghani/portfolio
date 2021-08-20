const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	env: {
		NEXT_APP_EXPIRE_TOKEN_DATE: 365,
		NEXT_APP_TOASTER_CLOSE_TIMEOUT: 5000,
		NEXT_APP_API_URL: '',
	},
	enableSvg: true,
	webpack(config) {
		config.module.rules.push(
			// {
			//   test: /\.(jpe?g|png)$/i,
			//   use: [
			//     {
			//       loader: 'responsive-images-loader',
			//       options: {
			//         adapter: require('responsive-images-loader/sharp'),
			//         publicPath: '/_next',
			//         name: 'static/media/[hash]-[width].[ext]',
			//       },
			//     },
			//   ],
			// },
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader',
			},
		);

		return config;
	},
};
