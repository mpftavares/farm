import { createSlice } from '@reduxjs/toolkit';

const fetchSlice = createSlice({
	name: 'fetch',
	initialState: {
		data: [],
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const { setData } = fetchSlice.actions;
export default fetchSlice.reducer;
