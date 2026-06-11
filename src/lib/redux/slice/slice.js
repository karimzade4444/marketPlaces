import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../../api/products";

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    data: [],
    search: "",
    creatModel: "",
    creatImg: "",
    creatPrice: "",
    id: null,
    editModel: "",
    editImg: "",
    editPrice: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setEditImg: (state, action) => {
      state.editImg = action.payload;
    },
    setEditModel: (state, action) => {
      state.editModel = action.payload;
    },
    setEditPrice: (state, action) => {
      state.editPrice = action.payload;
    },

    setCreatModel: (state, action) => {
      state.creatModel = action.payload;
    },
    setCreatImg: (state, action) => {
      state.creatImg = action.payload;
    },
    setCreatPrice: (state, action) => {
      state.creatPrice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setSearch, setCreatImg, setCreatModel, setCreatPrice } =
  mainSlice.actions;
export default mainSlice.reducer;
