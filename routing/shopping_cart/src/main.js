import Vue from "vue";
import App from "./app/App.vue";
import store from "./app/store";
import router from "./app/router/index";

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
