var webpack          = require('webpack'),
    WebPackDevServer = require('webpack-dev-server'),
    config           = require('./webpack.config.js'),
    serverConfig     = require('./config/server');

new WebPackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(serverConfig.port, serverConfig.host, (err, result) => {
    if(err) {
        return console.log(err);
    }

    console.log(`App launched @ ${serverConfig.host}:${serverConfig.port}`);
});
