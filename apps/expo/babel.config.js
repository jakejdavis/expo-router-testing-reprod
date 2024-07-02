module.exports = (api) => {
    api.cache(true);

    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "@tamagui/babel-plugin",
                {
                    config: "./tamagui.config.ts",
                    components: ["packages/app", "packages/ui", "assets", "tamagui"],
                    logTimings: true,
                },
            ],
        ],
    };
};
