// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import inViewportDirective from "vue-in-viewport-directive";
import DefaultLayout from "~/layouts/Default";
import "font-awesome/css/font-awesome.css";
import "~/assets/sass/main.scss";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  if (isClient) {
    const VModal = require("vue-js-modal").default;
    Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

    const vueSmoothScroll = require("vue2-smooth-scroll").default;
    Vue.use(vueSmoothScroll);
  }

  Vue.directive("in-viewport", inViewportDirective);

  Vue.component("Layout", DefaultLayout);
}
