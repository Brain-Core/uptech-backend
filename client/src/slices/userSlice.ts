import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../interfaces/IUser';


export  const userApi = createApi({
    reducerPath:'users',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3030'}),
    tagTypes:['IUser'],
    endpoints: (build) => ({
        getUsers : build.query<IUser, string | void>({
            query(){
                return{
                    url:'/auth/users'
                }
            },
            providesTags:(result) => [{type:"IUser"}]
        }),
        registerUser: build.mutation<IUser, Partial<IUser>>({
            query(body){
                return{
                    url:'/auth/register',
                    method:"POST",
                    body
                }
            },
            invalidatesTags: [{type:'IUser',id:'user'}]
        })
    })
})


export const {
    useGetUsersQuery,
    useRegisterUserMutation
} = userApi;