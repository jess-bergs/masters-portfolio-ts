const webpack = require('../webpack.config.js');

module.exports = {
    addons: ['@storybook/addon-backgrounds'],
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