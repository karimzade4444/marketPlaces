import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://69e5ff70ce4e908a155ec5a1.mockapi.io/mmj";

export const getProducts = createAsyncThunk(
  "mainSlice/getProducts",
  async (search) => {
    try {
      const response = await axios.get(api, {
        params: {
          model: search,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
);

export const createProduct = createAsyncThunk(
  "mainSlice/createUsers",
  async (data, { dispatch }) => {
    try {
      await axios.post(api, data);
      dispatch(getProducts());
    } catch (error) {
      console.error(error);
    }
  },
);

export const deleteProduct = createAsyncThunk(
  "mainSlice/deleteUser",
  async (id, { dispatch }) => {
    try {
      await axios.delete(`${api}/${id}`);
      dispatch(getProducts());
    } catch (error) {
      console.error(error);
    }
  },
);

export const updateProduct = createAsyncThunk(
  "mainSlice/updateUser",
  async (data, { dispatch }) => {
    try {
      await axios.put(`${api}/${data.id}`, data);
      dispatch(getProducts());
    } catch (error) {
      console.error(error);
    }
  },
);
