import { useState } from 'react';
import { useAddProductMutation } from '../../slices/productSlice';
import { useHistory } from 'react-router-dom';

function AddProduct() {

    const [addProduct] = useAddProductMutation();
    let [namep, setName] = useState('');
    let [photo, setPhoto] = useState('') ;

    let history = useHistory();

    const onChangePhoto = (e:any) => {
        setPhoto(e.target.files[0])
    }

    const saveProduct=(e:any)=>{
        e.preventDefault();
        const format = new FormData();
        format.append("namep",namep);
        format.append("photo",photo);
        addProduct(format);
        setName('');
        setPhoto('');
        history.push('/');

    }


    return (
        <div className='m-4'>
            <h5 className='m-2 text-center'>CREATE NEW PRODUCT</h5>
            <form  onSubmit={saveProduct} className='form'>
                <div className="form-group">
                    <input 
                    value={namep} 
                    onChange={(e)=> setName(e.target.value)} 
                    className='form-control' 
                    type="text" 
                    placeholder='Name...'/>
                </div>
                <div className="form-group">
                    <input
                    accept=".jpg, .png, .jpeg"
                    onChange={onChangePhoto} 
                    type="file"/>
                </div>
                <button type='submit' className='btn btn-outline-success' >save</button>
            </form>
        </div>
    )
}

export default AddProduct
