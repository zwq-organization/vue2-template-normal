module.exports = {

    pluginOptions: {
        // 'style-resources-loader': {
        //     preProcessor: 'less',
        //     patterns: ['./src/less/var.less']
        // }
    },
    // indexPath : "index.html",
    publicPath: "./",
    productionSourceMap: false,
    css: {
        sourceMap: false
    },
    devServer: {
        // proxy: {
            // "^/api": {
            //     target: "",
            //     ws:false,
            //     pathRewrite: {
            //         "^/api": ""
            //     },
            //     logLevel: "debug"
            // },
        // }
    },
}
