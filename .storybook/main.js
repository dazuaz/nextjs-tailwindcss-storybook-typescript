const path = require("path")

module.exports = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    // Resolves
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"]

    config.resolve.alias = {
      ...config.resolve.alias,
      // "@/Components": path.resolve(__dirname, "../src/components"),
    }

    return config
  },
}
