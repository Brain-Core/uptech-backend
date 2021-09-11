import { Link, useHistory, useParams } from 'react-router-dom';
import {useState,useEffect } from 'react';
import { useGetTeamQuery } from '../../slices/teamSlice';
import axios from 'axios';



function EditTem() {
    const history = useHistory();
    const {id}: {id:string} = useParams();
    const [completeName, setCompleteName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [position, setPosition] = useState('');

    //get one team member 
    const {data} = useGetTeamQuery(id);

    console.log(data)
 
    const onChangeImage = (e:any)=> setImage(e.target.files[0])

    

    useEffect(() => {
       setAddress(`${data?.address}`)
       setCompleteName(`${data?.completeName}`)
       setPhone(`${data?.phone}`)
       setEmail(`${data?.email}`)
       setPosition(`${data?.position}`)
    }, [])

    const handleSubmition = (e:any) => {
        e.preventDefault()
        const format = new FormData();
        format.append('completeName',completeName);
        format.append('address', address);
        format.append('email', email);
        format.append('phone', phone);
        format.append('position', position);
        format.append('avatar', image);
        axios.put(`http://localhost:3030/teams/edit/${id}`,format);
        setCompleteName('');
        setAddress('');
        setEmail('');
        setPosition('');
        setPhone('');
        history.push('/')
    }


    return (
        <div className="other">
            <div className="p-4">
                <h3 className="text-center font-weight-bold">Edit Member's Information</h3>
                <div className="card p-2">
                <form onSubmit={handleSubmition} className="form">
                        <div className="form-group">
                            <input
                            value={completeName}
                            onChange={(e)=> setCompleteName(e.target.value)}
                             type="text" className="form-control" placeholder={data?.completeName} />
                        </div>
                        <div className="form-group">
                            <input
                            value={address}
                            onChange={(e)=> setAddress(e.target.value)}
                             type="text" className="form-control" placeholder={data?.address} />
                        </div>
                        <div className="form-group">
                            <input
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                             type="email" className="form-control" placeholder={data?.email}/>
                        </div>
                        <div className="form-group">
                            <input
                            value={phone}
                            onChange={(e)=> setPhone(e.target.value)}
                             type="text" className="form-control" placeholder={data?.phone}/>
                        </div>
                        <div className="form-group">
                            <input
                            value={position}
                            onChange={(e)=> setPosition(e.target.value)}
                             type="text" className="form-control" placeholder={data?.position}/>
                        </div>
                        <div className="form-group">
                            <input
                            accept=".png, .jpg, .jpeg"
                            onChange={onChangeImage}
                             type="file" className="form-control" />
                        </div>
                       
                        <button type="submit" className="btn btn-secondary rounded mr-2">edit</button>
                        <Link className="btn btn-info rounded" to="/">cancel</Link>
                    </form>
                </div>
               
            </div>
        </div>
    )
}

export default EditTem
