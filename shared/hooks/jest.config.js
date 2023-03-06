module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/test/**/*.{ts}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/test/jest.setup.ts"],
};
