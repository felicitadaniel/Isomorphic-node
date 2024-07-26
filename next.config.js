const path = require('path')

module.exports = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname)
        return config
    },
    assetPrefix:
        process.env.NODE_ENV === 'production' ? '/Isomorphic-node/' : '',
    basePath: '/Isomorphic-node',
    trailingSlash: true,
}
