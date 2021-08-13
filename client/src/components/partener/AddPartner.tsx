import { useAddPartnerMutation } from '../../slices/partnerSlice';
import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';


function AddPartner() {
    const [addPartner] = useAddPartnerMutation();
    const history = useHistory();
    const [name, setName] = useState('');
    const [logo, setLogo] = useState('');

    const handleName = (e:any) => {
        setName(e.target.value)
    }

    const handleLogo = (e:any) => {
        setLogo(e.target.files[0])
    }

    const newPartner = (e:any) => {
        e.preventDefault()
        const format = new FormData();
        format.append('name',name)
        format.append('logo',logo);
        addPartner(format);
        history.push('/partner');
    }

    return (
        <div className="col-md-6 m-auto">
            <h4 className='text-center mt-4'>Add Partner</h4>
            <form onSubmit={newPartner}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={handleName} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <input onChange={handleLogo} type="file" accept=".png, .jpg, jpeg" />
                </div>
                <Link className="btn btn-outline-light m-1" to='/partner'>Cancel</Link>
                <button type="submit" className="btn btn-outline-primary">add</button>
            </form>
        </div>
    )
}

export default AddPartner
