import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  minPrice: null,
  maxPrice: null,
  minSize: null,
  maxSize: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    STORE_PRODUCTS(state, action) {
      state.products = action.payload.products;
    },
    GET_PRICE_RANGE(state, action) {
      const { products } = action.payload;
      const priceArray = products.map((product) => product.price);
      state.minPrice = Math.min(...priceArray);
      state.maxPrice = Math.max(...priceArray);
    },
    GET_SIZE_RANGE(state, action) {
      const { products } = action.payload;
      const sizeArray = products.map((product) => product.size);

      state.minSize = Math.min(...sizeArray);
      state.maxSize = Math.max(...sizeArray);
    },
  },
});

export const { STORE_PRODUCTS, GET_PRICE_RANGE, GET_SIZE_RANGE } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectMinPrice = (state) => state.product.minPrice;
export const selectMaxPrice = (state) => state.product.maxPrice;
export const selectMinSize = (state) => state.product.minSize;
export const selectMaxSize = (state) => state.product.maxSize;

export default productSlice.reducer;
