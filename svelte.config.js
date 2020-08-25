const sveltePreprocess = require('svelte-preprocess')

module.exports = {
    preprocess: sveltePreprocess({
        scss: {
            includePaths: ['src/styles'],
            implementation: require('sass'),
            renderSync: true
        },
        "postcss": true,
    })
}
