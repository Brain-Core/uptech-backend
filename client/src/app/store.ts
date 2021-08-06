import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../slices/productSlice';

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware);
    }
})