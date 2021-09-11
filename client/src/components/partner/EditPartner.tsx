import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useGetPartnerQuery} from '../../slices/partnerSlice';

function EditPartner() {
    const {id}:{id:string} = useParams();
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const {data, isLoading} = useGetPartnerQuery(id);
    const history = useHistory();

    const onChangeNamep = (e:any) => setName(e.target.value);
    const onChangePhoto = (e:any) => setPhoto(e.target.files[0]);

    useEffect(()=>{
        if(!isLoading){
            setName(`${data?.name}`);
        }
    },[])

    const onSubmitPartner = (e:any) => {
        e.preventDefault();
        const format = new FormData();
        format.append('name',name);
        format.append('logo',photo);
        axios.put(`http://localhost:3030/partner/edit/${id}`,format);
        setName('')
        history.push('/partner')
        
    }

    return (
        <div className="other">
             <div className="p-4">
                <h3 className="text-center font-weight-bold">Modify Partner</h3>
                <div className="card p-2">
                    <form onSubmit={onSubmitPartner} className="form">
                        <div className="form-group">
                            <input value={name}
                            onChange={onChangeNamep}
                             type="text" placeholder="name ..." className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input
                            onChange={onChangePhoto}
                            type="file" accept=".png, .jpg, .jpeg" />
                        </div>
                        <button type="submit" className="btn btn-secondary rounded mr-2">add</button>
                        <Link className="btn btn-info rounded" to="/partner">cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPartner
