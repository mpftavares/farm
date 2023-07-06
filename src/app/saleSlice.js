import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const getSales = createAsyncThunk(
// 	'[Sales] getSales',
// 	async () =>
// 		await fetch('http://localhost:3000/saleList').then((resp) => resp.json())
// );

export const getSales = createAsyncThunk(
	'[Sales] getSales',
	async () =>
		await fetch('https://github.com/mpftavares/farm_patuleia/blob/master/src/db.json')
			.then((resp) => resp.json())
			.then((data) => data.saleList)
);

const saleSlice = createSlice({
	name: '[Sales] sales',
	initialState: {
		sales: [],
		modal: false,
		selectedSale: null,
		loading: false,
		error: false,
	},
	reducers: {
		openModal: (state, action) => {
			state.modal = !state.modal;
		},
		setSelectedSale: (state, action) => {
			state.selectedSale = state.sales[action.payload].imageUrl;
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
				state.error = true;
			});
	},
});

export const { openModal, setSelectedSale } = saleSlice.actions;
export default saleSlice.reducer;
