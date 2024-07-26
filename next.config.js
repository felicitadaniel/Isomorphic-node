module.exports = {
    basePath: '/Isomorphic-node',
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
