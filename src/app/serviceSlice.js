import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getServices = createAsyncThunk(
	'[Services] getServices',
	async () =>
		await fetch('https://mpftavares.github.io/farm_patuleia/db.json')
			.then((resp) => resp.json())
			.then((data) => data.serviceList)
);

const serviceSlice = createSlice({
	name: '[Services] services',
	initialState: {
		services: [],
		loading: false,
		error: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getServices.pending, (state) => {
				state.loading = true;
			})
			.addCase(getServices.fulfilled, (state, action) => {
				state.loading = false;
				state.services = action.payload;
			})
			.addCase(getServices.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	},
});

export default serviceSlice.reducer;
