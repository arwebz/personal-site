---
title: Build a Static Site with Vue.js
date: 2019-03-05T22:21:00-0600
excerpt: >
  I enjoy creating single page applications (SPA) as much as the next guy, but
  not every modern website needs to be a SPA. Vue.js is a popular framework for
  building SPAs, but over the last few years it has become a popular framework
  for building multi-page websites as well, otherwise known as static sites.
tags:
  - vue.js
  - javascript
  - static site
---

I enjoy creating single page applications (SPA) as much as the next guy, but
not every modern website needs to be a SPA. Vue.js is a popular framework for
building SPAs, but over the last few years it has become a popular framework for
building multi-page websites as well, otherwise known as static sites.

# Tools

We will use three main tools to build a static site:

- Gridsome for our Vue.js-powered static site generator,
- Contentful to host our content,
- Netlify to host our static site.

I chose Gridsome over the widely-chosen Nuxt.js framework because I have found
it better-suited out-of-the-box for a content heavy static site. Learn more
about Gridsome [here](https://gridsome.org). As for hosting, I chose Netlify
because it is a more comprehensive static site hosting solution than anything
else I have found and has a ridiculously generous free-tier. Learn more about
Netlify [here](https://www.netlify.com).

# Getting started with Gridsome

To get started with Gridsome, make sure you have [Yarn](https://yarnpkg.com)
installed. Then install the gridsome cli with this command:

```bash
$ yarn global add @gridsome/cli
```

Now we can create our Gridsome project:

```bash
$ gridsome create my-static-site
$ cd my-static-site
$ yarn install
$ yarn develop
```

Now our static site is running on localhost port 8080!

# Finding a home for our content

Now that Gridsome is set up, let's set up Contentful where we will store our
content in the cloud. First we'll need to create an account on
[Contentful](https://contentful.com). Once we have our account, we will create
an example Blog space pre-populated with content models suited for a Blog and
example content. To do this click on the menu on the top left and click the
button to create a new space. Ensure you opt to create an example space, and
choose the Blog example. What you name your space doesn't matter. I've named it
'My Static Site'.

Once your space is created and initialized, click on the button to 'Use the
API'. This will show you your Space ID Content, Delivery API access token, and
environment (should be 'master' by default) which we'll need to integrate our
Contentful space into our static site.

# Integrating our content into our static site

With our Contentful space set up, we can now integrate it into our static
state. First we'll install the Contentful plugin:

```bash
$ yarn add @gridsome/source-contentful
```

Then we have to configure the plugin within `gridsome.config.js`. Paste the
following into the contents of that file:

```js
module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
        host: "cdn.contentful.com",
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        typename: "Contentful"
      }
    }
  ]
};
```

Notice we are using environment variables to store our Contentful credentials.
If we specify those in an `.env` file, Gridsome will read from it when building
our site. Our `.env` will look like the following (be sure to replace those placeholders
with your Contentful credentials):

```bash
CONTENTFUL_SPACE="<YOUR_CONTENTFUL_SPACE>"
CONTENTFUL_TOKEN="<YOUR_CONTENTFUL_TOKEN>"
CONTENTFUL_ENVIRONMENT="<YOUR_CONTENTFUL_ENVIRONMENT>"
```

With our static site connected to our Contentful space, we can build a page
that displays all of the example blog posts that came with it. Create a file at
`pages/Blog.vue`, and put the following code in it:

<!-- prettier-ignore-start -->
```html
<template>
  <Layout>
    <p>Articles:</p>
    <ul>
      <li v-for="{ node } in $page.posts.edges" :key="node.id">
        <g-link :to="node.path"> {{node.title}} </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allContentfulBlogPost {
    edges {
      node {
        id,
        title,
        path
      }
    }
  }
}
</page-query>
```
<!-- prettier-ignore-end -->

To be able to get to our new blog page from the home page, add this link to the
`layouts/Default.vue`:

```html
<g-link class="nav__link" to="/blog">Blog</g-link>
```

Now we have a page with a link to all of our articles pulled from our Contenful
space, but all of the links take us to a 404 page. We'll fix that by creating a
template for our contentful blog posts. But first, we need to install a markdown
processor in our project, since Contentful serves us content in markdown format:

```bash
$ yarn add markdown-it
```

Now we'll create a file at `templates/ContentfulBlogPost.vue` with the following content:

<!-- prettier-ignore-start -->
```html
<template>
  <Layout>
    <g-image class="hero-image" :src="$page.post.heroImage.file.url" />
    <h1>{{$page.post.title}}</h1>
    <div v-html="body" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: contentfulBlogPost (path: $path) {
    title,
    heroImage {
      file {
        url
      }
    },
    body
  }
}
</page-query>

<script>
  import MarkdownIt from "markdown-it";

  export default {
    computed: {
      body() {
        const md = new MarkdownIt();

        return md.render(this.$page.post.body);
      }
    }
  };
</script>

<style scoped>
  .hero-image {
    width: 100%;
  }
</style>
```
<!-- prettier-ignore-end -->

At this point, our static site is fully integrated with contentful. We can
navigate to our blogs page and see all the sample posts. Clicking on any one of
them will take us to to a page with that post's content. We're using
markdown-it to parse the markdown coming from Contentful. It's a very pluggable
system; to read more about it, visit its
[repository](https://www.github.com/markdown-it/markdown-it).

# Deploying our static site

Our static site is fully integrated with contentful now, so let's deploy it.
Our chosen static hosting provider, Netlify, is git-based. Netlify supports
Github, Gitlab, and Bitbucket. We will check our code into a git repository,
and push it up to one of those three Git repository hosting services.

Now, netlify needs to know how to build our site as well as where the built
artifacts will be, so we'll create a `netlify.toml` file that looks like this:

```toml
[build]
  publish = "dist/"
  command = "yarn build"
```

With `netlify.toml` checked into the repository, Netlify will know how to build
and deploy our static site. Let's create an account on
[Netlify](https://www.netlify.com). Then click the button to create a "New Site
from Git". Using the wizard, we will connect our repository to our site on
Netlify. We don't need to specify a build command or a publish directory since
we specified those in the `netlify.toml` file. Before clicking "Deploy Site",
we need to click "Advanced" which will allow us to set our environment
variables on Netlify. Remember we used environment variables for our Contentful
credentials to avoid checking them into version control. After we've added our
contentful credentials to Netlify and clicked "Deploy Site", Netlify will begin
deploying our site.

# Success!

That's it! Our static site has been deployed! You can check out my version
[here](https://xenodochial-varahamihira-1dc3a7.netlify.com) as well as the
[source](https://www.github.com/towerism/my-static-site). We built our static
site using Gridsome, a Vue.js-powered static site generator; Contentful, a
headless content management system; and Netlify, a static site hosting
provider.
