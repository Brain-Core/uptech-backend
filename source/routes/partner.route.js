import controller from '../controller/partner.controller';
import {Router} from 'express';
import { upload } from '../helper/helper';

const route = Router();

// get one partners 
// request: /partners
route.get('/', controller.getPartners)

// get one partner 
// request: /partners/:id
route.get('/:id', controller.getOnePartner)

// insert one partner 
// request: /partners/post
route.post('/post',upload.single('logo'), controller.insertPartners)

// update one partners 
// request: /partners/edit/:id
route.put('/edit/:id', upload.single('logo'),controller.updateOnePartner)


// delete one partners 
// request: /partners/delete/:id
route.delete('/delete/:id', controller.deleteOnePartner)

export default route;