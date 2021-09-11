import { configureStore } from '@reduxjs/toolkit';
import { partnerApi } from '../slices/partnerSlice';
import { productApi } from '../slices/productSlice';
import { teamApi } from '../slices/teamSlice';
import { impactApi } from '../slices/impactSlice';

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [partnerApi.reducerPath]: partnerApi.reducer,
        [teamApi.reducerPath]: teamApi.reducer,
        [impactApi.reducerPath]: impactApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(
            productApi.middleware,
            partnerApi.middleware,
            teamApi.middleware,
            impactApi.middleware
        );
    },
   
})