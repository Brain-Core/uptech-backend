import { Link } from 'react-router-dom';
import { useGetProductQuery } from '../../slices/productSlice';

function Product() {
    const { data=[] } = useGetProductQuery();

    return (
        <div className='m-4'>
           <div className='d-flex justify-content-between m-2'>
            <h4 className='font-weight-bold'> Product</h4>
            <Link to='/newProduct' className="btn btn-primary">New Product</Link>
           </div>
            <table className='table table-hover'>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>*</th>
                    <th>*</th>
                </tr>
                <tbody>
                    {data.map((product, i)=>(
                        <tr key={i}>
                            <th>{i+1}</th>
                            <td>{product.namep}</td>
                            <td> <img width='30' className="rounded-circle" height='30' src={product.photo} alt="" /> </td>
                            <td><button className="btn btn-outline-warning">edit</button></td>
                            <td><button className="btn btn-outline-danger">delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Product
