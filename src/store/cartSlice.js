import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      const itemPrice = parseFloat(newItem.price);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += itemPrice;
      } else {
        state.items.push({
          id: newItem.id,
          price: itemPrice,
          quantity: 1,
          totalPrice: itemPrice,
          name: newItem.name,
        });
      }
      state.totalQuantity++;
      state.totalPrice += itemPrice;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;

        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
