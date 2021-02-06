// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
const tsJestPreset = require('jest-preset-angular/jest-preset').globals['ts-jest'];

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  globals: {
    'ts-jest': {
      ...tsJestPreset,
      tsConfig: './src/tsconfig.spec.json',
      diagnostics: {
        ignoreCodes: ['TS2339']
      }
    }
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./src/setup-jest.ts', 'jest-extended'],
  transformIgnorePatterns: ['node_modules/(?!ng-event-source)'],
  testPathIgnorePatterns: ['src/environments']
};
