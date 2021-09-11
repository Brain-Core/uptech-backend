import { Link } from 'react-router-dom'
import { useGetImpactsQuery,useDeleteImpactMutation } from '../../slices/impactSlice';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Table from '../table/Table';

function Impact() {
    const {data=[]} = useGetImpactsQuery();
    const [deleteImpact] = useDeleteImpactMutation();
    const columns = [
        {
            field:'id',
            headerName:'ID',
            width:100,
        },
        {
            field:'title',
            headerName:'Title',
            width: 300
        },
        {
            field: 'description',
            headerName: 'Description',
            width:200
        },
        {
            field:'photo',
            headerName:'Image',
            width:200,
            renderCell: (params:any) => (
                <div>
                    <img style={{borderRadius:'50%'}} height={50} width={50} src={params.row.photo} alt="" />
                </div>
            )
        },
        {
            field:'*',
            headerName:'*',
            renderCell: (params:any) => (
                <div>
                    <Link to={`/editimpact/${params.row.id}`}>
                        <EditIcon/>
                    </Link>
                    <DeleteIcon onClick={()=> deleteImpact(params.row.id)}  className="icon-delete"/>
                </div>
            )
        },
    ]
    return (
        <div className="other">
            <div className="p-4">
                <div className="d-flex justify-content-around">
                    <h3 className="font-weight-bold">Impacts</h3>
                    <Link to='/addimpact'>Add Impact+</Link>
                </div>
                <Table columns={columns} data={data} />

            </div>
        </div>
    )
}

export default Impact
