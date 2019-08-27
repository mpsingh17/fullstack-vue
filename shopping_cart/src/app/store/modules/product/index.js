import axios from "axios";

const state = {
	productItems: []
};
const mutations = {
	UPDATE_PRODUCT_ITEMS(state, payload) {
		state.productItems = payload;
	}
};
const actions = {
	getProductItems({ commit }) {
		axios.get("/api/products").then(res => {
			commit("UPDATE_PRODUCT_ITEMS", res.data);
		});
	}
};
const getters = {
	productItems: state => state.productItems
};

const productModule = {
	state,
	mutations,
	actions,
	getters
};

export default productModule;
