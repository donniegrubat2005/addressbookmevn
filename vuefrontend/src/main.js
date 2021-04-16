import Vue from 'vue'
import App from './App.vue'
import "./middleware/http-common"

import "./assets/styles.css";

import "jquery/src/jquery";
import "popper.js";
import "startbootstrap-sb-admin-2/vendor/jquery/jquery.min.js";
import "startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "startbootstrap-sb-admin-2/vendor/jquery-easing/jquery.easing.min.js";
import "startbootstrap-sb-admin-2/js/sb-admin-2.min.js";

import "./assets/js/datatables.min";

import VueToastr2 from "vue-toastr-2";
import "vue-toastr-2/dist/vue-toastr-2.min.css";
import router from './routes';


Vue.config.productionTip = false

window.toastr = require("toastr");


Vue.use(VueToastr2);
 // eslint-disable-next-line
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
