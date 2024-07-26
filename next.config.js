const path = require('path')

module.exports = {
    basePath: '/Isomorphic-node',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
        }
    },
    distDir: 'out',
    output: 'export',
}
