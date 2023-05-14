import { configureStore } from '@reduxjs/toolkit';
import navSlice from '../features/header/headerSlice';
import saleSlice from '../features/sales/saleSlice';
import serviceSlice from '../features/services/serviceSlice';
import calltoactionSlice from '../features/calltoaction/calltoactionSlice';

export default configureStore({
	reducer: {
		nav: navSlice,
		services: serviceSlice,
		sales: saleSlice,
		calltoaction: calltoactionSlice,
	},
});
