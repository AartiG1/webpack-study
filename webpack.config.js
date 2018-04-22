module.exports = {
    entry: {
        "main": "./test.js"
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            { 
                test: /\.js/, 
                use: [{ loader: "babel-loader" }],
                exclude: /node_modules/ 
            }
        ]
    },
    devtool: "source-map", // debugging
    devServer: {
        open: true,
    }

}