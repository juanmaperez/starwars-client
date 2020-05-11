var config = {
  entry: './index.js',
  output: {
    path: __dirname + '/',
    filename: 'index.js',
  },
  devServer: {
		inline: true,
		port: 3000
	},
  module : {
    rules : [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  }
};
module.exports = config;