import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useGetOneProductQuery} from '../../slices/productSlice';

function EditProduct() {
    const [namep, setNamep] = useState('');
    const [photo, setPhoto] = useState('');
    const {id}:{id:string} = useParams();
    const {data, isLoading,error} = useGetOneProductQuery(id);
    const history = useHistory();

    const onChangeNamep = (e:any) => setNamep(e.target.value);
    const onChangePhoto = (e:any) => setPhoto(e.target.files[0]);
    
    useEffect(()=>{
        if(!isLoading){
            setNamep(`${data?.namep}`);
        }
    },[])

    const onSubmitProduct = (e:any) => {
        e.preventDefault()
        const format = new FormData();
        format.append('namep', namep);
        format.append('photo', photo);
        axios.put(`http://localhost:3030/products/edit/${id}`,format);
        setNamep('');
        history.push('/product');


    }
    

    return (
        <div className="other">
            <div className="p-4">
                <h3 className="text-center font-weight-bold">EDIT PRODUCT</h3>
                <div className="card p-2">
                    {
                        error ? (
                            <h2>error happen</h2>
                        ): isLoading ? (
                            <div className="d-flex items-center justify-content-center">
                                <h2 className="text-center font-weight-bold">Loading ...</h2>
                            </div>
                        ) : data ? (
                            <form onSubmit={onSubmitProduct} className="form">
                            <div className="form-group">
                                <input value={namep}
                                onChange={onChangeNamep}
                                 type="text" placeholder="name ..." className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input value={photo} 
                                onChange={onChangePhoto}
                                type="file" accept=".png,.jpg, .jpeg" />
                            </div>
                            <button type="submit" className="btn btn-secondary rounded mr-2">edit</button>
                            <Link className="btn btn-info rounded" to="/product">cancel</Link>
                            </form>
                        ): null
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default EditProduct
