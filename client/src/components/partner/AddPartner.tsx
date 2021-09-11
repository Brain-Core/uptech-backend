import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAddPartnerMutation } from '../../slices/partnerSlice';


function AddPartner() {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [addPartner] = useAddPartnerMutation();
    const history = useHistory();

    const onChangeName = (e:any) => setName(e.target.value);
    const onChangePhoto = (e:any) => setPhoto(e.target.files[0]);

    const onSubmitPartner = (e:any) => {
        e.preventDefault();
        const format = new FormData();
        format.append('name',name);
        format.append('logo',photo);
        addPartner(format);
        setName('');
        history.push('/partner')

    }


    return (
        <div className="other">
            <div className="p-4">
                <h3 className="text-center font-weight-bold">New Partner</h3>
                <div className="card p-2">
                    <form onSubmit={onSubmitPartner} className="form">
                        <div className="form-group">
                            <input value={name}
                            onChange={onChangeName}
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

export default AddPartner
