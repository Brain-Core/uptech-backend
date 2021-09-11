import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Iimpact } from '../interfaces/IImpact';

export const impactApi = createApi({
    reducerPath:'impacts',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3030'}),
    tagTypes:['Impact'],
    endpoints: (build) => ({
        getImpacts: build.query<Iimpact[], string | void>({
            query(){
                return{
                    url:'/impacts'
                }
            },
            providesTags: (result) =>  result ?  [...result.map(({ id }) => ({ type: 'Impact', id } as const)), { type: 'Impact', id: 'impact' }, ]: [{ type: 'Impact', id: 'impact' }],
        }),
        getImpact: build.query<Iimpact, string>({
            query(id:string){
                return{
                    url:`/impacts/${id}`
                }
            },
            providesTags:(result, error,id) => [{type:"Impact",id}]
        }),
        addImpact: build.mutation<Iimpact, FormData>({
            query(body){
                return{
                    url:'/impacts/post',
                    method:'POST',
                    body
                }
            },
            invalidatesTags:[{ type:'Impact', id:'impact'}]
        }),
        deleteImpact: build.mutation<{success:boolean; _id:string},string>({
            query(id){
                return{
                    url:`/impacts/delete/${id}`,
                    method:'DELETE'
                }
            },
            invalidatesTags:[{type:'Impact', id:'impact'}]
        })
    })
})

export const { useAddImpactMutation, 
    useGetImpactQuery, 
    useDeleteImpactMutation, 
    useGetImpactsQuery } = impactApi;