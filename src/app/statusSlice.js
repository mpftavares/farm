import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
	name: 'status',
	initialState: {
		isOpen: false,
		closingTime: null,
	},
	reducers: {
		updatePharmacyStatus: (state, action) => {
			state.isOpen = action.payload;
		},
		updateClosingTime: (state, action) => {
			state.closingTime = action.payload;
		}
	},
});

export const { updatePharmacyStatus, updateClosingTime } = statusSlice.actions;
export default statusSlice.reducer;
