const isProd = process.env.NODE_ENV === 'production'
const repoName = 'Isomorphic-node'

module.exports = {
    assetPrefix: isProd ? `/${repoName}/` : '',
    basePath: isProd ? `/${repoName}` : '',
    trailingSlash: true,
}
