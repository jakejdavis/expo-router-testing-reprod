/* eslint-disable */
const nxPreset = require("@nx/jest/preset").default;

export default {
    ...nxPreset,
    displayName: "expo",
    preset: "jest-expo",
    moduleFileExtensions: ["ts", "tsx", "js", "mjs", "html"],
    transform: {
        "^.+\\.(js|mjs|svg)$": "babel-jest",
        "^.+\\.(tsx|ts|html)$": [
            "ts-jest",
            {
                tsconfig: "<rootDir>/tsconfig.spec.json",
            },
        ],
    },
    transformIgnorePatterns: [
        "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|skin-tone|uuid)",
    ],
    globals: {
        __DEV__: true,
    },
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/__tests__/file-mock.js",
    },
    coverageDirectory: "../../coverage/apps/expo",
    testMatch: ["<rootDir>/__tests__//*.test.tsx"],
    setupFilesAfterEnv: ["<rootDir>/__tests__/setup-tests.ts"],
};
