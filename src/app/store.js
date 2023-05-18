import { configureStore } from '@reduxjs/toolkit';
import navSlice from '../components/header/headerSlice';
import saleSlice from '../components/sales/saleSlice';
import serviceSlice from '../components/services/serviceSlice';
import statusSlice from '../features/status/statusSlice';

export default configureStore({
	reducer: {
		nav: navSlice,
		services: serviceSlice,
		sales: saleSlice,
		status: statusSlice,
	},
});
