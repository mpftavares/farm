import { createSlice } from '@reduxjs/toolkit';

const directionSlice = createSlice({
	name: '[Directions] directions',
	initialState: {
		modal: false,
	},
	reducers: {
		openModal: (state, action) => {
			state.modal = !state.modal;
		},
	},
});

export const { openModal } = directionSlice.actions;
export default directionSlice.reducer;
