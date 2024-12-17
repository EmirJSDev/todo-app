export default {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
    testMatch: ["**/__tests__/**/*.(ts|tsx)", "**/?(*.)+(spec|test).(ts|tsx)"],
    rootDir: "./",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
};
