// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

const siteUrl = "https://www.martinfrackerjr.com";

module.exports = {
  siteName: "Martin Fracker, Jr.",
  siteUrl,
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
          feed_url: `${siteUrl}/rss.xml`,
          site_url: siteUrl
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
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-135375284-1"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        config: {
          "/blog": {
            changefreq: "weekly",
            priority: 0.7
          },
          "/blog/**/*": {
            changefreq: "weekly",
            priority: 0.7
          },
          "/": {
            changefreq: "monthly",
            priority: 0.5
          }
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
    if (process.env.DEBUGGING === "true") {
      config.mode("development");
    }
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
