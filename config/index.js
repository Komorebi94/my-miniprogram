import { resolve } from 'path';

const CIPluginOpt = {
    // 微信小程序
    weapp: {
        appid: "wxd3b82f00c28826dc",
        projectPath: process.cwd() + '/dist',
        privateKeyPath: process.cwd() + '/config/private.wxd3b82f00c28826dc.key',
        ignores: ['node_modules/**/*'],
    },
    // 版本号
    version: "1.0.0",
    // 版本发布描述
    desc: "版本描述"
}

const config = {
    projectName: 'my-miniporgram-demo',
    date: '2021-12-30',
    designWidth: 750,
    deviceRatio: {
        375: 2,
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2
    },
    alias: {
        '@': resolve(__dirname, '..', 'src'),
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: [
        ['taro-plugin-compiler-optimization'],
        ["@tarojs/plugin-mini-ci", CIPluginOpt]
    ],
    defineConstants: {
    },
    copy: {
        patterns: [
        ],
        options: {
        }
    },
    framework: 'react',
    mini: {
        postcss: {
            pxtransform: {
                enable: true,
                config: {

                }
            },
            url: {
                enable: true,
                config: {
                    limit: 1024 // 设定转换尺寸上限
                }
            },
            cssModules: {
                enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        }
    },
    h5: {
        publicPath: '/',
        staticDirectory: 'static',
        postcss: {
            autoprefixer: {
                enable: true,
                config: {
                }
            },
            cssModules: {
                enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        }
    }
}

export default function (merge) {
    if (process.env.NODE_ENV === 'development') {
        return merge({}, config, require('./dev'))
    }
    return merge({}, config, require('./prod'))
}
