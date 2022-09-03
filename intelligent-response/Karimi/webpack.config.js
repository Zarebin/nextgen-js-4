const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none',
      module : {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [
            //       // Creates `style` nodes from JS strings
            //       "style-loader",
            //       // Translates CSS into CommonJS
            //       "css-loader",
            //       // Compiles Sass to CSS
            //       "sass-loader",
            //     ],
            //   },
            //   {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader', 'css-loader'
            //     ]
            // },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'style-loader', 'css-loader', 'sass-loader'
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },

              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            }
        ]
    },
        plugins: [
            new TerserPlugin(),
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            })
        ]
        
    
}


