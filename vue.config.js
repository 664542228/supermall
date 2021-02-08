module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "components/common",
        content: "components/contents",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
