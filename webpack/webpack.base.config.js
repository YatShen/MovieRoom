const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

function resolve(dir) {
    return path.join(__dirname, '../resources', dir)
}

function assetsPath(_path) {
    const assetsSubDirectory = 'static'

    return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
    context: path.resolve(__dirname, '../resources/'),
    entry: {
        app: './js/app.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('js')
        }
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [resolve('js/icons')],
                options: {
                    symbolId: 'icon-[name]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [resolve('js/icons')],
                options: {
                    limit: 10000,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            },
        ]
    },
    // plugins: [new VueLoaderPlugin()],
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}