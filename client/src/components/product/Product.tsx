import './Product.css';
import { Link } from 'react-router-dom' 
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useGetProductQuery, useDeleteProductMutation } from '../../slices/productSlice';
import Table from '../table/Table';

function Product() {

    const [deteleProduct] = useDeleteProductMutation();
    const {data=[]} = useGetProductQuery();

    const columns = [
        {
            field:'id',
            headerName:'ID',
            width:200
        },
        {
            field:'namep',
            headerName:'Name',
            width:200
        },
        {
            field:'photo',
            headerName:'Image',
            width: 200,
            renderCell: (params:any)=>(
                <div className="m-1">
                    <img style={{ borderRadius:'50%'}} src={params.row.photo} width={50} height={50}/>
                </div>
            )
        },
        {
            field:'',
            headerName:'*',
            renderCell:(params:any)=>(
                <div>
                    <Link to={`/editproduct/${params.row.id}`}>
                        <EditIcon/>
                    </Link>
                    <DeleteIcon onClick={()=> deteleProduct(params.row.id)}  className="icon-delete"/>
                </div>
            )
        }
    ]
    
    return (
        <div className="other">
            <div className='p-5'>
                <div className="d-flex justify-content-around">
                    <h3 className="font-weight-bold">Our Products</h3>
                    <Link to='/addproduct'>Add product+</Link>
                </div>
                <Table
                    columns={columns}
                    data={data}
                />
            </div>

        </div>
    )
}

export default Product
