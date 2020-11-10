const path = require("path")
module.exports = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  /* nextjs -> no need to import React and can use alias modules */
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"]
    return config
  },
}
