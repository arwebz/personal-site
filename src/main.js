// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import inViewportDirective from "vue-in-viewport-directive";
import DefaultLayout from "~/layouts/Default";
import * as moment from "moment";
import VueSocialSharing from "vue-social-sharing";
import VueDisqus from "vue-disqus";

import "font-awesome/css/font-awesome.css";
import "~/assets/sass/main.scss";
import "../node_modules/prism-themes/themes/prism-xonokai.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  if (isClient) {
    const VModal = require("vue-js-modal").default;
    Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

    const vueSmoothScroll = require("vue2-smooth-scroll").default;
    Vue.use(vueSmoothScroll);
  }

  Vue.use(VueSocialSharing);
  Vue.use(VueDisqus);

  Vue.directive("in-viewport", inViewportDirective);

  Vue.component("Layout", DefaultLayout);
  Vue.filter("date", input => {
    return moment(input, "YYYY/MM/DD").format("MMMM Do YYYY");
  });
}
