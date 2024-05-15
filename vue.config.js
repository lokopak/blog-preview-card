const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: "src/assets",
  publicPath:
    process.env.NODE_ENV === "production" ? "/blog-preview-card/" : "/",
});
