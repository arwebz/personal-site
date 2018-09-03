# personal-site

> Personal Website

## Build Setup

``` bash
# prepare images
$ docker-compose build

# install dependencies
$ ./yarn

# serve with hot reload at localhost:3000
$ docker-compose up web

# serve static site at localhost:5000
$ docker-compose up static

# build static site for production
$ ./yarn generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## `web` vs `static`

What's the difference between `docker-compose up web` and `docker-compose up
static`? The former is best for development, because you get hot reload when
making changes to code. The latter allows you to test the site in a
production-like environment, since `web` runs in SPA mode and things that
worked in SPA mode may not work in static mode. Bear in mind that you must run
`docker-compose build static` in order to update the `static` docker image
after making code changes.

## Email Sending

Contact Me section uses netlify to capture form data. For more information see [their docs](https://www.netlify.com/docs/form-handling/).
