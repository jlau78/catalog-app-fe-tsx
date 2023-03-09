const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const {ProvidePlugin} = require('webpack');
const dependencies = require('../package.json').dependencies;
const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {

    entry: './src/index.ts',
    mode: 'development',
    context: path.resolve(__dirname, '../'),
    devtool: 'source-map',
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    optimization: {
        minimize: true
    },
    resolve: {
        extensions: [
            '.ts', '.tsx', '.js'
        ],
        fallback: {
            "http": false, 
            "browser": false,
            "https": false,
            "stream": false,
            "url": false,
            "buffer": false,
            "timers": false
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|cjs|tsx|ts)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                include: [path.join(__dirname, 'src')],
                options: { // path is relative to the ts entry file in this case: ./src/index.ts
                    configFile: '../tsconfig.json'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                    }
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader']
            }, {
                test: /\.(png|jpe?g|gif|ico|svg)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ]
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader", {
                        loader: 'css-loader',
                        options: {
                            modules: { // use CSSModules but generate local classnames
                                mode: 'local',
                                // localIdentName: IS_DEV ? '[local]' : '[hash:base64:5]',
                                // localIdentName: '[local]__[hash:base64:5]'
                                localIdentName: '[local]'
                            }
                        }
                    },
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin(
            {
                name: 'crpfDrsMCCD',
                filename: 'remoteEntry.js',
                remotes: {
                    // These are the urls that the code is served from. they get consumed automatically at runtime on the client.
                    // The key can be called anything but the name in the value must match the name in remote (equivalent of line 30 ^ in the remote)
                    // Inbox: 'crpfDrsInbox@/inbox/remoteEntry.js',
                },
                exposes: {
                    './App': './src/App.tsx'
                },
                // These are deps that are shared by mulitple micro-frontends, it stops the same package being loaded multiple times on the client.
                shared: {
                    react: '^17.0.2',
                    'react-dom': '^17.0.2',
                    'react-router-dom': '^6.3.0',
                    'react-router': '^6.3.0',
                    'react-query': '^3.39.0',
                    'styled-components': '^5.3.3',
                    'govuk-react': '0.10.0'
                }
            }
        ),
        new HtmlWebpackPlugin(
            {template: './public/index.html'}
        ),
        new ProvidePlugin(
            {React: 'react', ReactDOM: 'react-dom'}
        ),
        // TODO: Not needed if not using config module with webpack. Could not get config module to work.
        new NodePolyfillPlugin(),
    ]
};
