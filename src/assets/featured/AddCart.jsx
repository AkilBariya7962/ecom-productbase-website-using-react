import { createSlice } from "@reduxjs/toolkit";

const AddCartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    }
  }
});

export const { add, remove } = AddCartSlice.actions;
export default AddCartSlice.reducer;
