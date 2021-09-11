import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAddProductMutation} from '../../slices/productSlice';


function AddProduct() {
    const [namep, setNamep] = useState('');
    const [photo, setPhoto] = useState('');
    const [addProduct] = useAddProductMutation();
    const history = useHistory();

    const onChangeNamep = (e:any) => setNamep(e.target.value);
    const onChangePhoto = (e:any) => setPhoto(e.target.files[0]);

    const onSubmitProduct = (e:any) =>{
        e.preventDefault()
        const format = new FormData();
        format.append('namep', namep);
        format.append('photo', photo);
        addProduct(format);
        setNamep('');
        history.push('/product');

    }


    return (
        <div className="other">
            <div className="p-4">
                <h3 className="text-center font-weight-bold">ADD NEW PRODUCT</h3>
                <div className="card p-2">
                    <form onSubmit={onSubmitProduct} className="form">
                        <div className="form-group">
                            <input value={namep}
                            onChange={onChangeNamep}
                             type="text" placeholder="name ..." className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input
                            onChange={onChangePhoto}
                            type="file" accept=".png, .jpg, .jpeg" />
                        </div>
                        <button type="submit" className="btn btn-secondary rounded mr-2">add</button>
                        <Link className="btn btn-info rounded" to="/product">cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
