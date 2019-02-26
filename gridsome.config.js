// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

var path = require("path");

module.exports = {
  siteName: "Martin Fracker, Jr.",
  siteDescription: "A software developer committed to lifelong learning.",
  plugins: [
    contentPlugin({
      directory: "blog",
      typeName: "BlogPost",
      route: "/blog/:year/:month/:day/:slug"
    }),
    contentPlugin({
      directory: "misc",
      typeName: "Misc"
    }),
    contentPlugin({
      directory: "projects",
      typeName: "Project"
    }),
    contentPlugin({
      directory: "skills",
      typeName: "Skill"
    }),
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "BlogPost",
        feedOptions: {
          title: "Martin's Blog",
          feed_url: "https://www.martinfrackerjr.com/rss.xml",
          site_url: "https://www.martinfrackerjr.com"
        },
        feedItemOptions: node => ({
          title: node.title,
          url: `https://www.martinfrackerjr.com${node.path}`,
          author: "Martin Fracker, Jr.",
          description: node.excerpt,
          categories: node.tags,
          date: node.date
        }),
        output: {
          dir: "./static",
          name: "rss.xml"
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  },
  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader");
  }
};

function contentPlugin({ directory, typeName, route }) {
  return {
    use: "@gridsome/source-filesystem",
    options: {
      path: `content/${directory}/**/*.md`,
      typeName,
      route
    }
  };
}
