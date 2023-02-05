module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/config/jest.setup.ts'],
    testPathIgnorePatterns: [
        '../node_modules/',
        '../coverage',
        '../dist',
        '../backend/fileUpload/tests/testFiles',
        '../backend/fileUpload/tests/fileUploadService.integration.js',
    ],
    transformIgnorePatterns: ['../node_modules/'],
    rootDir: '../',
    moduleDirectories: ['../node_modules', '../src', '../tests', '../backend'],
    moduleNameMapper: {
        '@src/(.*)': '../src/$1',
        '@styles/(.*)': '../styles/$1',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$': '<rootDir>/config/assetsTransformer.js',
        '\\.(css|less)$': '<rootDir>/config/assetsTransformer.js',
    },

    coverageDirectory: 'coverage',
    collectCoverageFrom: ['./src/**/*.{js,jsx,ts,tsx}', './backend/**/*.{js,jsx,ts,tsx}'],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
};
