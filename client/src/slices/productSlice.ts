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
              ...result.map(({ _id }) => ({ type: 'IProduct', _id } as const)),
              { type: 'IProduct', id: 'LIST' },
            ]
          : 
            [{ type: 'IProduct', id: 'LIST' }],
        }),
        getOneProduct:build.query<IProdcut, string>({
          query(_id:string){
            return {
              url:`/products/${_id}`
            }
          },
          providesTags: (result, error, _id) => [{ type: 'IProduct', _id }],
        }),
        addProduct: build.mutation<IProdcut, Partial<IProdcut> | FormData>({
          query(body){
            return{
              url:'/products/post',
              method:'POST',
              body
            }
          },
          invalidatesTags:[{type: 'IProduct', id:'LIST'}]
        }),
        editProduct: build.mutation<IProdcut, Partial<IProdcut>>({
          query(data){
            const {_id, ...body } = data;
            return{
              url: `products/edit/${_id}`,
              method:'PUT',
              body
            }
          },
          invalidatesTags:[{type: 'IProduct', id:'LIST'}]
        }),
        deleteProduct: build.mutation<{success:boolean; _id:string}, number>({
          query(_id){
            return {
              url:`/products/delete/${_id}`,
              method:'DELETE'
            }
          },
          invalidatesTags: (result, error, id) => [{ type: 'IProduct', id }],
        })
    })
});


export const { 
  useGetProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
  useGetOneProductQuery 
} = productApi;

