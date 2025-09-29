/* eslint-disable no-undef */
module.exports = {
    plugins: {
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        },
        '@fullhuman/postcss-purgecss': {
            mode: 'all',
            content: ['./hugo_stats.json'],
            dynamicAttributes: ['aria-current', 'href', 'role', 'src'],
            safelist: {
                standard: [
                    'show',
                    'fade',
                    /-backdrop$/,
                    /^is-/,
                    /^has-/,
                    /^js-/
                ],
                greedy: [
                    /^data-anim$/
                ]
            },
            defaultExtractor: (content) => {
                let els = JSON.parse(content).htmlElements;
                return els.tags.concat(els.classes);
            }
        }
    }
};