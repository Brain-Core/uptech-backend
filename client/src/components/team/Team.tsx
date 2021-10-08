import { useGetTeamsQuery, useDeleteTeamMutation } from '../../slices/teamSlice';
import { Link } from 'react-router-dom';
import Table from '../table/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Team() {
    const { data=[] } = useGetTeamsQuery();
    const [deleteTeam] = useDeleteTeamMutation();
    

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'completeName',
          headerName: 'Full name',
          width: 180,
          editable: false,
        },
        {
          field: 'address',
          headerName: 'Address',
          width: 150,
          editable: false,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: false,
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            width: 150,
            editable: false,
        },
        {
            field: 'position',
            headerName: 'Position',
            width: 120,
            editable: false,
        },
        {
            field:'avatar',
            headername: "Avatar",
            width: 120,
            renderCell: (params:any)=>(
                <div>
                    <img alt="" style={{ borderRadius:'50%'}} src={params.row.avatar} width={50} height={50}/>
                </div>
            )
        },
        {
            field:'',
            headerName:'*',
            renderCell:(params:any)=>(
                <div>
                    <Link to={`/editteam/${params.row.id}`}>
                        <EditIcon/>
                    </Link>
                    <DeleteIcon onClick={()=> deleteTeam(params.row.id)} className="icon-delete"/>
                </div>
            )
        }
      ];
    return (
        <div className="other">
            <div className="p-4">
                <div className="d-flex justify-content-around">
                    <h4>Team</h4>
                    <Link to='/addteam'>Add Member +</Link>
                </div>
                <Table data={data} columns={columns}/>
            </div>
        </div>
    )
}

export default Team
