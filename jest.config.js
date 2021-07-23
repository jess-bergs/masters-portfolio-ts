module.exports = {
    testPathIgnorePatterns: ['/node_modules/', '/\\.cache/'],
    roots: ['<rootDir>/test'],
    transformIgnorePatterns: ['/node_modules/'],
    testEnvironmentOptions: {
        url: 'http://localhost/',
        pretendToBeVisual: true,
    },
    moduleNameMapper: {
        '^.+\\.(css|scss)$': '<rootDir>/test/mocks/stylemock.js',
    },
    coverageDirectory: './coverage',
};
