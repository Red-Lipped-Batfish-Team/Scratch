import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    quantity: 0,
    total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
      addProduct: (state, action) => {
          state.quanity += 1;
          state.products.push(action.payload.product)
          state.total += action.payload.price
    }
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
