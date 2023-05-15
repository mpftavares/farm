import { createSlice } from '@reduxjs/toolkit';

const wereopenSlice = createSlice({
	name: 'wereopen',
	initialState: {
		isOpen: false,
	},
	reducers: {
		updatePharmacyStatus: (state, action) => {
			state.isOpen = action.payload;
		},
	},
});

export const { updatePharmacyStatus } = wereopenSlice.actions;
export default wereopenSlice.reducer;
