import { configureStore } from '@reduxjs/toolkit';
import navSlice from './headerSlice';
import saleSlice from './saleSlice';
import statusSlice from './statusSlice';
import serviceSlice from './serviceSlice';

export default configureStore({
	reducer: {
		nav: navSlice,
		sales: saleSlice,
		status: statusSlice,
		services: serviceSlice,
	},
});
