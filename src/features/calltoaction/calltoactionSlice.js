import { createSlice } from '@reduxjs/toolkit';

const calltoactionSlice = createSlice({
	name: 'calltoaction',
	initialState: {
		isOpen: false,
	},
	reducers: {
		updatePharmacyStatus: (state, action) => {
			state.isOpen = action.payload;
		},
	},
});

export const { updatePharmacyStatus } = calltoactionSlice.actions;
export default calltoactionSlice.reducer;
