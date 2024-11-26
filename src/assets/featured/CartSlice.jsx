// CartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const Fecthproductdata = createAsyncThunk(
  'dalid/kdfjk',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Fecthproductdata.pending, (state) => {
        state.loading = true;
      })
      .addCase(Fecthproductdata.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(Fecthproductdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
