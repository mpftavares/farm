import { createSlice } from '@reduxjs/toolkit';

const serviceSlice = createSlice({
    name: 'services',
    initialState: {
        serviceList: [],
    },
    reducers: {
        getServices: (state, action) => {
            state.serviceList = action.payload;
        }

    }
})

export const {
	getServices
} = serviceSlice.actions;
export default serviceSlice.reducer;