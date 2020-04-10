// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Notification from './plugins/notification';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.use(Notification);

  NProgress.configure({ showSpinner: false });

  router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });

  router.afterEach((to, from) => {
    NProgress.done();
  });

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    });
    next();
  });
}
