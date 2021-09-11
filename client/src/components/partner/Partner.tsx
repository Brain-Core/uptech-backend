import './Partner.css';
import { Link } from 'react-router-dom';
import { useGetPartnersQuery, useDeletePartnerMutation } from '../../slices/partnerSlice';
import Table from '../table/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Partner() {
    const {data=[], isLoading, error} = useGetPartnersQuery(); 
    const [deletePartner] = useDeletePartnerMutation()


    const columns = [
        {
            field:'id',
            headerName:'ID',
            width: 200
        },
        {
            field:'name',
            headerName:'Name',
            width: 200
        },
        {
            field:'logo',
            headerName:'Logo',
            width: 200,
            renderCell: (params: any) => (
                <div>
                    <img style={{borderRadius:'50%'}} src={params.row.logo} width={50} height={50}  alt="" />
                </div>
            )
        },
        {
            field:'*',
            headerName:'*',
            width: 200,
            renderCell:(params:any)=>(
                <div>
                    <Link to={`/editpartner/${params.row.id}`}>
                        <EditIcon/>
                    </Link>
                    <DeleteIcon onClick={()=> deletePartner(params.row.id)}  className="icon-delete"/>
                </div>
            )
        }
    ];
    return (
        <div className="other">
            <div className="p-4">
                <div className="d-flex justify-content-around">
                    <h3 className="font-weight-bold">Partners</h3>
                    <Link to='/addpartner'>Add Partner+</Link>
                </div>
                {
                    error ? ( <h3 className="danger">error ...</h3> )
                    : isLoading ? (
                        <h3> Loading...</h3>
                    ) : data ? (
                        <Table
                        columns={columns}
                        data={data}
                        />
                    ):null
                }
            </div>
        </div>
    )
}

export default Partner
