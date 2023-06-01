import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSales = createAsyncThunk(
	'[Sales] getSales',
	async () =>
		await fetch('http://localhost:3000/saleList').then((resp) => resp.json())
);

const saleSlice = createSlice({
	name: '[Sales] sales',
	initialState: {
		sales: [],
		modal: false,
		selectedSale: null,
		loading: false,
	},
	reducers: {
		openModal: (state, action) => {
			state.modal = !state.modal;
		},
		setSelectedSale: (state, action) => {
			state.selectedSale = state.saleList[action.payload].imageUrl;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getSales.pending, (state) => {
				state.loading = true;
			})
			.addCase(getSales.fulfilled, (state, action) => {
				state.loading = false;
				state.sales = action.payload;
			})
			.addCase(getSales.rejected, (state) => {
				state.loading = false;
			});
	},
});

export const { openModal, setSelectedSale } = saleSlice.actions;
export default saleSlice.reducer;
