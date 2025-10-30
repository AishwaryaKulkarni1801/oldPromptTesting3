/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  
  // Basic file extensions
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],

  // Simplified transform
  transform: {
    '^.+\\.(ts|html)$': [
      'jest-preset-angular',
      {
        tsconfig: 'tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },

  // Test patterns
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  
  // Simple ignore patterns
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],

  // Coverage
  collectCoverage: false,
  
  // Simple transform ignore
  transformIgnorePatterns: [
    'node_modules/(?!(@angular|@ngrx|ngx-.*))'
  ]
};