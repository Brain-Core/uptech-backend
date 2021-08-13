import { useGetPartnersQuery,useDeletePartnerMutation } from '../../slices/partnerSlice';
import { Link } from 'react-router-dom';

function Partner() {
    const { data=[], isLoading } = useGetPartnersQuery();
    const [deletePartner] = useDeletePartnerMutation();
    if(isLoading) return <h2> isLoading...</h2>
    return (
        <div className="mt-4">
            <div className="d-flex justify-content-around m-2">
                <h4 className="">Partners</h4>
                <Link to='/newpartner' className="btn btn-outline-primary">New Partner +</Link>
            </div>
          
           <div className="container">
               <table className="table">
                   <tr>
                       <th>id</th>
                       <th>name</th>
                       <th>logo</th>
                       <th>*</th>
                   </tr>
                   <tbody>
                       {data.map((partner,i)=>(
                           <tr key={i}>
                               <td>{i+1}</td>
                               <td>{partner.name}</td>
                               <td> 
                                <img 
                                className="rounded-circle"
                               src={partner.logo} 
                               height="50"
                               width="50"
                               alt=""/></td>
                               <td><Link to={`/editpartner/${partner._id}`} className="btn btn-outline-warning mr-1">Edit</Link><button onClick={()=> deletePartner(partner._id)} className="btn btn-outline-danger">delete</button></td>
                           </tr>
                       ))}
                   </tbody>
               </table>
           </div>
        </div>
    )
}

export default Partner
