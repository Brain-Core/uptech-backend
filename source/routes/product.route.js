import controller from '../controller/product.controller';
import {Router} from 'express';
import { upload } from '../helper/helper';

const route = Router();

// get one product 
// request: /products
route.get('/', controller.getProducts)

// get one product 
// request: /products/:id
route.get('/:id', controller.getOneProduct)

// get one product 
// request: /products/post
route.post('/post',upload.single('photo'), controller.insertProduct)

// get one product 
// request: /products/edit/:id
route.put('/edit/:id', upload.single('photo'),controller.updateProduct)


// get one product 
// request: /products/delete/:id
route.delete('/delete/:id', controller.deleteOneProduct)

export default route;

