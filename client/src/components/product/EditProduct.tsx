import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useGetOneProductQuery } from '../../slices/productSlice';

function EditProduct(props:any) {

   const _id = props.match.params.id;
   const {data} = useGetOneProductQuery(_id);
   const history = useHistory();



    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');

    const onChangeName = (e:any) =>{
        setName(e.target.value);
    }

    const onChangeImage = (e: any) => {
        setPhoto(e.target.files[0]);
    }

   

    

    const editProduct = (e:any) => {
        e.preventDefault()
        const format = new FormData();
        format.append('namep',name);
        format.append("photo", photo);
        axios.put(`http://localhost:3030/products/edit/${_id}`,format)
        .then(res => console.log(res.data))
        // edit(format,_id);
        history.push('/');
        console.log(name)
    }


    return (
        <div className="container mt-4">
            <h4> Edit </h4>
            <div className="d-flex mb-4 float-right center">
                <h5>{data?.namep}</h5>
                <img 
                src={data?.photo} 
                className="rounded-circle" 
                width='100' 
                height='100' 
                alt="" />
            </div>
            
            <form onSubmit={editProduct} className="form">
                <div className="form-group">
                    <input 
                   
                    type="text"
                     className="form-control"
                     name="name"
                     onChange={onChangeName}
                      placeholder="name" />
                </div>
                <div className='form-group'>
                    <input
                    onChange={onChangeImage}
                     type="file" accept=".jpg, .png, .jpeg" />
                </div>
                <Link className='btn btn-outline-dark mr-2' to='/'>Cancel</Link>
                <button className="btn btn-outline-light">Edit</button>
            </form>
        </div>
    )
}

export default EditProduct
