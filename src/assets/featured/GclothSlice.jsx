import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const FetchGcloth = createAsyncThunk(
  'fetchGcloth,sklm',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products?sort=desc')
    return response.data;
  }
)

export const GclothSlice = createSlice({
  name: 'cloth',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchGcloth.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchGcloth.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(FetchGcloth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export default GclothSlice.reducer;