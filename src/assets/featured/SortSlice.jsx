import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchSortlist = createAsyncThunk(
  'FetchSortlist/sklm',
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products/category/jewelery")
    return response.data;
  }
);

const Sortslice = createSlice({
  name: 'sortlist',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchSortlist.pending, (State) => {
        State.loading = true;
      })
      .addCase(FetchSortlist.fulfilled, (State, action) => {
        State.loading = false;
        State.items = action.payload;
      })
      .addCase(FetchSortlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export default Sortslice.reducer;