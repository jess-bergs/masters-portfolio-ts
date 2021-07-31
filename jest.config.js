module.exports = {
    testPathIgnorePatterns: ['/node_modules/', '/\\.cache/'],
    roots: ['<rootDir>/test'],
    transformIgnorePatterns: ['/node_modules/'],
    testEnvironmentOptions: {
        url: 'http://localhost/',
        pretendToBeVisual: true,
    },
    setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
    moduleNameMapper: {
        '^.+\\.(css|scss|svg)$': '<rootDir>/test/mocks/mockImport.js',
    },
    coverageDirectory: './coverage',
};

