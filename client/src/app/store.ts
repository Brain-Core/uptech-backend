import { configureStore } from '@reduxjs/toolkit';
import { partnerApi } from '../slices/partnerSlice';
import { productApi } from '../slices/productSlice';

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [partnerApi.reducerPath]: partnerApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware,partnerApi.middleware);
    },
   
})