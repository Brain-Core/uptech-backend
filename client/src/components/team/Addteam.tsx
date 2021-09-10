import { Link , useHistory} from 'react-router-dom';
import { useAddTeamMutation } from '../../slices/teamSlice';
import { useState } from 'react'

function Addteam() {

    const [completeName, setCompleteName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [position, setPosition] = useState('');

    const history = useHistory();
    
    // call add method
    const [addMember] = useAddTeamMutation();

    const onChangeImage = (e:any)=> setImage(e.target.files[0])

    const handleSubmition = (e:any) => {
        e.preventDefault()
        const format = new FormData();
        format.append('completeName',completeName);
        format.append('address', address);
        format.append('email', email);
        format.append('phone', phone);
        format.append('position', position);
        format.append('avatar', image);
        addMember(format);
        setCompleteName('');
        setAddress('');
        setEmail('');
        setPosition('');
        setPhone('');
        history.push('/');
    }

    
    
    return (
        <div className="other">
            <div className="p-4">
                <h3 className="font-weight-bold text-center">Add Member</h3>
                <div className="card p-2">
                    <form onSubmit={handleSubmition} className="form">
                        <div className="form-group">
                            <input
                            onChange={(e)=> setCompleteName(e.target.value)}
                             type="text" className="form-control" placeholder="Full name .." />
                        </div>
                        <div className="form-group">
                            <input
                            onChange={(e)=> setAddress(e.target.value)}
                             type="text" className="form-control" placeholder="Address ..." />
                        </div>
                        <div className="form-group">
                            <input
                            onChange={(e)=> setEmail(e.target.value)}
                             type="email" className="form-control" placeholder="Email  ..."/>
                        </div>
                        <div className="form-group">
                            <input
                            onChange={(e)=> setPhone(e.target.value)}
                             type="text" className="form-control" placeholder="Phone  ..."/>
                        </div>
                        <div className="form-group">
                            <input
                            onChange={(e)=> setPosition(e.target.value)}
                             type="text" className="form-control" placeholder="Position ..."/>
                        </div>
                        <div className="form-group">
                            <input
                            accept=".png, .jpg, .jpeg"
                            onChange={onChangeImage}
                             type="file" className="form-control" />
                        </div>
                       
                        <button type="submit" className="btn btn-secondary rounded mr-2">add</button>
                        <Link className="btn btn-info rounded" to="/">cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addteam
