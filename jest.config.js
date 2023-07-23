const jestPreset = require('@testing-library/react-native/jest-preset');

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'svg'],
  setupFiles: [...jestPreset.setupFiles],
  setupFilesAfterEnv: [
    './tests/__mocks__/setup.js',
    './tests/__mocks__/server.js',
    '@testing-library/jest-native/extend-expect',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/tests/__mocks__/svg.js',
  },
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'tests/',
    'src/types',
    'styles.tsx',
    'mock-server/',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|react-navigation|@react-native-community|@react-navigation/.*)',
  ],
};
