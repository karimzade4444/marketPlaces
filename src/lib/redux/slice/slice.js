import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../../api/products";

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    data: [],
    search:"",
  },
  reducers: {
    setSearch:(state,action)=>{
      state.search=action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {setSearch} =mainSlice.actions;
export default mainSlice.reducer;