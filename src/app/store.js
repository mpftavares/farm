import { configureStore } from '@reduxjs/toolkit';
import navSlice from '../components/header/headerSlice';
import saleSlice from '../components/sales/saleSlice';
import serviceSlice from '../components/services/serviceSlice';
import wereopenSlice from '../features/wereopen/wereopenSlice';

export default configureStore({
	reducer: {
		nav: navSlice,
		services: serviceSlice,
		sales: saleSlice,
		wereopen: wereopenSlice,
	},
});
