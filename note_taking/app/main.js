const state = {
	notes: [],
	timestamps: []
};

const mutations = {
	ADD_NOTE(state, payload) {
		let newNote = payload;
		state.notes.push(newNote);
	},
	ADD_TIMESTAMP(state, payload) {
		let newTimeStamp = payload;
		state.timestamps.push(newTimeStamp);
	}
};

const actions = {
	addNote(context, payload) {
		context.commit("ADD_NOTE", payload);
	},
	addTimestamp(context, payload) {
		context.commit("ADD_TIMESTAMP", payload);
	}
};

const getters = {
	getNotes: state => state.notes,
	getTimestamps: state => state.timestamps,
	getNoteCount: state => state.notes.length
};

const store = new Vuex.store({
	state,
	mutations,
	actions,
	getters
});

const inputComponent = {
	template: `<input placeholder='Enter a note' class="input is-small" type="text" />`
};

new Vue({
	el: "#app",
	store,
	components: {
		"input-component": inputComponent
	}
});
