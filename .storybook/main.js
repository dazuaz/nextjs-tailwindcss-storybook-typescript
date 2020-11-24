const path = require("path")
module.exports = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  /* nextjs -> no need to import React and can use alias modules */
  webpackFinal: async (config) => {
    // If you want to add a directory to search in that takes precedence over node_modules/:
    // https://webpack.js.org/configuration/resolve/#resolvemodules
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"]
    return config
  },
}
