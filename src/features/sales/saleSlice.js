import { createSlice } from '@reduxjs/toolkit';

const saleSlice = createSlice({
    name: 'sales',
    initialState: {
        saleList: [],
    },
    reducers: {
        getSales: (state, action) => {
            state.saleList = action.payload;
        }

    }
})

export const {
	getSales
} = saleSlice.actions;
export default saleSlice.reducer;