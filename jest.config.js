module.exports = {
    roots: ['<rootDir>/test'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex:'(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    setupFiles: ["<rootDir>/test/setEnvVars.js"]
  }