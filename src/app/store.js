import { configureStore } from "@reduxjs/toolkit";
import navSlice from "../features/header/headerSlice";


export default configureStore({
    reducer:{
        nav: navSlice,
    }

})