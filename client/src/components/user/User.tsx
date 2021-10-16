import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom' 
import Table from '../table/Table';
import { useGetUsersQuery } from '../../slices/userSlice';




function User() {
    const {data=[]} = useGetUsersQuery();

    const columns = [
        {
            field:'id',
            headerName:'ID',
            width:200
        },
        {
            field:'name',
            headerName:'Username',
            width:200
        },
        {
            field:'email',
            headerName:'Email',
            width: 200
        },
        {
            field:'',
            headerName:'*',
            renderCell:(params:any)=>(
                <div>
                    <Link to="#">
                        <button className='btn btn-outlined'>deactivate</button>
                    </Link>
                </div>
            )
        }
    ]

    
    return (
        <div className='other'>
             <div className='p-5'>
                <div className="d-flex justify-content-around m-2">
                    <h3 className="font-weight-bold">Manager Users</h3>
                    <Link to='/register'>
                    <Link to="/register" className="btn bg-primary p-2 text-white" style={{borderRadius:'100px'}}>
                        <AddIcon/>
                    </Link>
                    </Link>
                </div>
                <Table
                    columns={columns}
                    data={data}
                />
            </div>
        </div>
    )
}

export default User
