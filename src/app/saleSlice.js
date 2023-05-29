import { createSlice } from '@reduxjs/toolkit';

const saleSlice = createSlice({
	name: 'sales',
	initialState: {
		modal: false,
		selectedSale: null,
	},
	reducers: {
		openModal: (state, action) => {
			state.modal = !state.modal;
		},
		setSelectedSale: (state, action) => {
			state.selectedSale = state.saleList[action.payload].imageUrl;
		},
	},
});

export const { getSales, openModal, setSelectedSale } = saleSlice.actions;
export default saleSlice.reducer;
