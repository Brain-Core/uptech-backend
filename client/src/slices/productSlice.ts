import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProdcut } from '../interfaces/IProduct';


export const productApi = createApi({
    reducerPath:'product',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3030'}),
    tagTypes:['IProduct'],
    endpoints: (build) => ({
        getProduct: build.query<IProdcut[], number | void>({
            query(){
                return {
                    url: '/products'
                }
            },
            providesTags: (result) =>
        result
          ? 
            [
              ...result.map(({ id }) => ({ type: 'IProduct', id } as const)),
              { type: 'IProduct', id: 'LIST' },
            ]
          : 
            [{ type: 'IProduct', id: 'LIST' }],
        })
    })
});


export const { useGetProductQuery } = productApi;

