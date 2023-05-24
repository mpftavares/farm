import { configureStore } from '@reduxjs/toolkit';
import navSlice from './headerSlice';
import saleSlice from './saleSlice';
import serviceSlice from './serviceSlice';
import statusSlice from './statusSlice';

export default configureStore({
	reducer: {
		nav: navSlice,
		services: serviceSlice,
		sales: saleSlice,
		status: statusSlice,
	},
});
