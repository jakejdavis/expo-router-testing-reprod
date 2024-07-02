import { renderRouter, screen } from "expo-router/testing-library";
import { Text } from "react-native";

describe("CompletedFeedbackScreen", () => {
    it("should render this mock", () => {
        const MockComponent = jest.fn(() => <Text />);

        renderRouter(
            {
                index: MockComponent,
                'directory/a': MockComponent,
                '(group)/b': MockComponent,
            },
            {
                initialUrl: '/directory/a',
            }
        );
        
        expect(screen).toHavePathname('/directory/a');
    });
});
