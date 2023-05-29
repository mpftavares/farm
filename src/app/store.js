import { configureStore } from '@reduxjs/toolkit';
import navSlice from './headerSlice';
import saleSlice from './saleSlice';
import statusSlice from './statusSlice';
import fetchSlice from './fetchSlice';

export default configureStore({
	reducer: {
		nav: navSlice,
		sales: saleSlice,
		status: statusSlice,
		fetch: fetchSlice,
	},
});
