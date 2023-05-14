import { createSlice } from '@reduxjs/toolkit';

const calltoactionSlice = createSlice({
	name: 'calltoaction',
	initialState: {
		saleList: [],
		modal: false,
		selectedSale: null,
	},
	reducers: {},
});

export const {} = calltoactionSlice.actions;
export default calltoactionSlice.reducer;
