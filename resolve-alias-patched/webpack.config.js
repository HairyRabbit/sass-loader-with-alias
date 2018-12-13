module.exports = {
    mode: 'development',
    entry: './a.scss',
    output: {
        path: __dirname
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader',
                  { loader: 'css-loader', options: { importLoaders: 1 }},
                  require('path').resolve(__dirname, './sass-loader/lib/loader.js')]
        }]
    },
    resolve: {
        alias: {
            '@foo': './foo'
        }
    }
}
