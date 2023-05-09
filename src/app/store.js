import { configureStore } from "@reduxjs/toolkit";
import navSlice from "../features/header/headerSlice";
import saleSlice from "../features/sales/saleSlice";
import serviceSlice from "../features/services/serviceSlice";


export default configureStore({
    reducer:{
        nav: navSlice,
        services: serviceSlice,
        sales: saleSlice,
    }

})