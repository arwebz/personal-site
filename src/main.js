// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default";
import PageSection from "~/components/PageSection";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "font-awesome/css/font-awesome.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("PageSection", PageSection);
  Vue.use(Buefy);
}
