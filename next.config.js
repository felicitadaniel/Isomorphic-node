const path = require('path')

module.exports = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname)
        return config
    },
    assetPrefix:
        process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
    basePath: '/your-repo-name',
    trailingSlash: true,
}
