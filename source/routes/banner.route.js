import bannerController from '../controller/banner.controller';

import { upload } from '../helper/helper';
import { Router } from 'express';


const route = Router();


route.get('/', bannerController.getAllBanner);

route.post('/', upload.single('image'), bannerController.insertBanner)

export default route;