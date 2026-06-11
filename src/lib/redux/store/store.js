import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "../slice/slice";
export default configureStore({
    reducer:{
        marketPlace: mainSlice,
    },
});