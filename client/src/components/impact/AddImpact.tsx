import { Link, useHistory } from 'react-router-dom'
import { useAddImpactMutation } from '../../slices/impactSlice';
import { useState } from 'react';


function AddImpact() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const history = useHistory();

    const [addImpact] = useAddImpactMutation();

    // handle onchange
    const onChangeTitle = (e:any) => setTitle(e.target.value);
    const onChangeDescription = (e:any) => setDescription(e.target.value);
    const onChangePhoto = (e:any) => setPhoto(e.target.files[0])

    const onSubmit = (e:any) => {
        e.preventDefault();
        const format = new FormData();
        format.append('title', title);
        format.append('description', description);
        format.append('photo', photo);
        addImpact(format);
        setTitle('');
        setDescription('');
        history.push('/impact')
    }

    return (
        <div className="other">
            <div className="p-4">
                <h3 className="font-weight-bold text-center">New Impact</h3>
                <div className="card p-2">
                    <form onSubmit={onSubmit} className="form">
                        <div className="form-group">
                            <input
                            className="form-control"
                            value={title}
                            onChange={onChangeTitle}
                             type="text" 
                             placeholder="title"
                              />
                        </div>
                        <div className="form-group">
                            <textarea 
                            className="form-control"
                            placeholder="description"
                            value={description}
                            onChange={onChangeDescription}
                             cols={30 } rows={10}></textarea>
                        </div>
                        <div className="form-group">
                            <input type="file" accept=".png, .jpeg, .jpg" onChange={onChangePhoto} />
                        </div>
                        <button type="submit" className="btn btn-secondary rounded mr-2">add</button>
                        <Link className="btn btn-info rounded" to="/impact">cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddImpact
