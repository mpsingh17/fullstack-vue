import axios from "axios";

const state = {
	login: null
};

const mutations = {
	SET_TOKEN(state, token) {
		state.token = toke;
	}
};

const actions = {
	async login({ commit }) {
		const res = await axios.post("/api/login");
		localStorage.setItem("token", res.data.token);
		commit("SET_TOKEN", res.data.token);
	},
	logout({ commit }) {
		return new Promise(resolve => {
			localStorage.removeItem("token");
			commit("SET_TOKEN", null);
			resolve();
		});
	}
};

const getters = {
	token: state => state.token
};

const loginModule = {
	state,
	mutations,
	actions,
	getters
};

export default loginModule;
