// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/post': { page: '/post' },
            '/p/[id]': { page: '/p/[id]' }
        }
    }
});
