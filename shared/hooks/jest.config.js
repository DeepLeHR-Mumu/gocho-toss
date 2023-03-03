module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["test/**/*.{ts}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  // moduleFileExtension: "tsx",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
};
