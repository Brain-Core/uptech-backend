import impactController from "../controller/impact.controller";
import { upload } from "../helper/helper";
import { Router } from "express";

const route = Router()

// get one impacts 
// request: /impacts
route.get('/', impactController.getImpact);

// get one partner 
// request: /impact/:id
route.post('/:id',impactController.getOneImpact);

// insert one partner 
// request: /impact/post
route.post('/post', upload.single('photo'), impactController.insertImpact);


// update one impact 
// request: /impact/edit/:id

route.put('/put/:id', upload.single('photo'), impactController.updateImpact);


// delete one impact
// request: /impacts/delete/:id

route.delete('/delete/:id',impactController.deleteImpact);


export default route;