import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
	name: 'status',
	initialState: {
		isOpen: false,
		closingTime: null,
	},
	reducers: {
		updateStatus: (state, action) => {
			state.isOpen = action.payload;
		},
		updateClosingTime: (state, action) => {
			state.closingTime = action.payload;
		}
	},
});

export const { updateStatus, updateClosingTime } = statusSlice.actions;
export default statusSlice.reducer;
