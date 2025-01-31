import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
  // setupFilesAfterEnv: ["./jest-preload-env.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@core/(.*)$": "<rootDir>/src/core/$1",
    "^@infra/(.*)$": "<rootDir>/src/infra/$1",
    "^@adapters/(.*)$": "<rootDir>/src/adapters/$1",
  },
};

export default config;
