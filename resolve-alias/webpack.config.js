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
                  'sass-loader']
        }]
    },
    resolve: {
        alias: {
            '@foo': './foo'
        }
    }
}
