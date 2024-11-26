import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../featured/CartSlice';
import Sortslice from '../featured/SortSlice';
import AddCartSlice from '../featured/AddCart';
import GclothSlice from '../featured/GclothSlice';
import AuthSlice from '../featured/AuthSlice';

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    sortlist: Sortslice,
    cart: AddCartSlice,
    cloth: GclothSlice,
    auth: AuthSlice,
  },
});


export default store;
