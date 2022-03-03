module.exports = {
  coveragePathIgnorePatterns: [
    "src/types/",
    "src/backend/models/",
    "src/redux",
    "src/utils/constants/",
    
    "setupTests.ts",
    "index.tsx",
    "react-app-env.d.ts",
    
    ".type.ts",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
  ],
  moduleDirectories: [
    "node_modules",
    "src",
  ],
  modulePaths: [
    "<rootDir>",
  ],
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  testEnvironment: "jsdom"
}
