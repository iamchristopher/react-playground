var path         = require('path'),
    webpack      = require('webpack'),
    serverConfig = require('./config/server');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: [
            `webpack-dev-server/client?http://${serverConfig.host}:${serverConfig.port}`,
            'webpack/hot/only-dev-server',
            './source/index.js'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'source'),
                loader: 'react-hot!babel?presets[]=react&presets[]=es2015'
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'source'),
                loader: 'style!css!sass'
            }
        ]
    }
};
