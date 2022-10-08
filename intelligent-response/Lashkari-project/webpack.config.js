var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry: {
      app: './src/main.js'
   },
   output: {
      path: path.resolve(__dirname, 'dev'),
      filename: 'main_bundle.js'
   },
   mode:"development",
   plugins: [new MiniCssExtractPlugin()],
   module: {
      rules: [
         {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
            options: {
         	 presets: ['@babel/preset-env']
           }
         },
	      {
	         test: /\.scss$/i,
            use: [
		            MiniCssExtractPlugin.loader,
		            "css-loader",
		            "sass-loader"
	              ],
	      }
      ]
   }
};
