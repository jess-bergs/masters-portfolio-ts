module.exports = {
    env: {
        test: {
            presets: [
                [
                    '@babel/env',
                    {
                        targets: {
                            node: 14,
                        },
                    },
                ],
                '@babel/react',
                '@babel/typescript',
            ],
        },
        production: {
            presets: [
                [
                    '@babel/env',
                    {
                        modules: false,
                        debug: true,
                        targets: {
                            browsers: ['last 2 versions', 'edge 90', 'not ie 11', 'not ie 10'],
                        },
                    },
                ],
                '@babel/react',
                '@babel/typescript',
            ],
        },
        development: {
            presets: [
                [
                    '@babel/env',
                    {
                        modules: false,
                        debug: true,
                        targets: {
                            chrome: 90,
                            edge: 90,
                            firefox: 88,
                        },
                    },
                ],
                '@babel/react',
                '@babel/typescript',
            ],
        },
    },
    plugins: [
    ],
};
