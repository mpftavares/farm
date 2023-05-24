import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
	name: 'status',
	initialState: {
		isOpen: false,
	},
	reducers: {
		updatePharmacyStatus: (state, action) => {
			state.isOpen = action.payload;
		},
	},
});

export const { updatePharmacyStatus } = statusSlice.actions;
export default statusSlice.reducer;
