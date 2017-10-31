var path = require("path");
var utils = require("./utils");
var config = require("../config");
var vueLoaderConfig = require("./vue-loader.conf");

function resolve(dir) {
    return path.join(__dirname, "..", dir);
}

module.exports = {
    entry: {
        app: "./src/main.js"
    },
    output: {
        path: config.build.assetsRoot,
        filename: "[name].js",
        publicPath:
            process.env.NODE_ENV === "production"
                ? config.build.assetsPublicPath
                : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            "@": resolve("src")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: "eslint-loader",
                enforce: "pre",
                include: [resolve("src"), resolve("test")],
                options: {
                    formatter: require("eslint-friendly-formatter")
                }
            },
            {
                test: /\.vue$/,
                loaders: [
                    {
                        loader: "vue-loader",
                        options: vueLoaderConfig
                    },
                    {
                        loader: "markup-inline-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: [resolve("src"), resolve("test")]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loaders: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 5000
                        }
                    },
                    {
                        loader: "img-loader",
                        options: {
                            name: utils.assetsPath("img/[name].[hash:7].[ext]")
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: true,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // webp: {
                            //     quality: 75
                            // }
                        }
                    }
                    // {
                    //     loader: require.resolve("./lazy-loader")
                    // }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: utils.assetsPath("media/[name].[hash:7].[ext]")
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
                }
            }
        ]
    }
};
