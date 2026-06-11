import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../../api/products";

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {} =mainSlice.actions;
export default mainSlice.reducer;