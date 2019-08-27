import Vue from "vue";
import Vuex from "vuex";
import product from "./modules/product/index";
import cart from "./modules/cart/index";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		product,
		cart
	}
});
