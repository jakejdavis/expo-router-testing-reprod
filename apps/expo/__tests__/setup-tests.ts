import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
import '@testing-library/jest-native/extend-expect';
import 'react-native-accessibility-engine';
import 'react-native-gesture-handler/jestSetup';

// HACK: hide invalid prop warning (Tamagui replaces $... at runtime)
// const consoleError = console.error.bind(console);
// console.error = (...args) => {
//     if (args.toString().startsWith("Warning: Failed %s type: %s%s,prop") || args.toString().startsWith("Warning: An update to")) {
//         return;
//     }
//     consoleError(...args);
// };


jest.mock("react-native-safe-area-context", () => ({
    SafeAreaProvider: jest.fn(),
    useSafeAreaInsets: jest.fn(),
}));

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);
jest.mock("aws-amplify/auth", () => ({
    fetchAuthSession: jest.fn().mockResolvedValue({
        userSub: "test",
    }),
    resetPassword: jest.fn(),
    signUp: jest.fn(),
    signIn: jest.fn(),
    signOut: jest.fn(),
}));
jest.mock("solito/router", () => ({
    useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
        back: jest.fn(),
    }),
}));
jest.mock("solito/navigation", () => ({
    useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
    }),
}));
jest.mock("solito/image", () => ({
    SolitoImage: jest.fn(),
}));
jest.mock("@tamagui/toast", () => ({
    ...jest.requireActual("@tamagui/toast"),
    useToastController: () => ({
        show: jest.fn(),
        apply: jest.fn(),
    }),
}));
jest.mock("uuid", () => ({
    v4: jest.fn(() => "uuid"),
}));
jest.mock('react-native-reanimated', () => null, {
    virtual: true,
});

global.fetch = jest.fn();