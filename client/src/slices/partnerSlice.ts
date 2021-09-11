import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPartner } from '../interfaces/IPartner';


export const partnerApi = createApi({
    reducerPath:'partner',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3030'}),
    tagTypes:['IPartner'],
    endpoints: (build) => ({
        getPartners : build.query<IPartner[],string | void>({
            query(){
                return {
                    url:'/partners'
                }
            },
            providesTags: (result) =>  result ?  [...result.map(({ _id }) => ({ type: 'IPartner', _id } as const)), { type: 'IPartner', id: 'ORDER' }, ]: [{ type: 'IPartner', id: 'ORDER' }],
        }),
        getPartner: build.query<IPartner, string>({
            query(_id: string){
                return{
                    url: `/partners/${_id}`
                }
            },
            providesTags:(result, error,_id) => [{type:"IPartner",_id}]
        }),
        addPartner: build.mutation<IPartner, FormData>({
            query(body){
                return{
                    url:'/partners/post',
                    method: 'POST',
                    body
                }
            },
            invalidatesTags:[{type: 'IPartner', id:'ORDER'}]
        }),
        deletePartner: build.mutation<{success:boolean; _id:string}, string>({
            query(_id){
                return{
                    url:`/partners/delete/${_id}`,
                    method:'DELETE'
                }
            },
            invalidatesTags:[{type: 'IPartner', id:'ORDER'}]
        })
    })
});


export const { useGetPartnersQuery, useAddPartnerMutation,useDeletePartnerMutation,useGetPartnerQuery } = partnerApi;

