import { Link,useHistory } from "react-router-dom"
import {useState} from 'react'
import { useGetPartnerQuery } from '../../slices/partnerSlice';
import axios from "axios";

function EditPartner(props:any) {
    const _id = props.match.params.id;
    const { data } = useGetPartnerQuery(_id);
    const [name, setName] = useState('');
    const [logo, setLogo] = useState('');
    const history = useHistory();

    const handleName = (e:any) => {
        setName(e.target.value)
    }

    const handleLogo = (e:any) => {
        setLogo(e.target.files[0])
    }

    const editPartner = (e:any) => {
        e.preventDefault()
        const format = new FormData();
        format.append('name',name)
        format.append('logo',logo);
        axios.put(`http://localhost:3030/partners/edit/${_id}`,format);
        history.push('/partners')
        
    }
    return (
        <div className="col-md-6 m-auto">
            <h4 className="text-center mt-4">Edit the Partner "{data?.name}".</h4>
            <form onSubmit={editPartner}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={handleName} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <input onChange={handleLogo} type="file" accept=".png, .jpg, jpeg" />
                </div>
                <Link className="btn btn-outline-light m-1" to='/partner'>Cancel</Link>
                <button type='submit' className="btn btn-outline-primary">edit</button>
            </form>
        </div>
    )
}

export default EditPartner
