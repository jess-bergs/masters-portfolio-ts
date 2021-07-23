const webpack = require('../webpack.config.js');

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    webpackFinal: (config) => {
        return {
            ...config,
            module: {
                ...config.module,
                rules: webpack.module.rules,
            },
            resolve: {
                ...config.resolve,
                ...webpack.resolve,
            }
        };
    },
};