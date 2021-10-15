import { Router } from 'express';
import { register , login, findAllUser} from '../controller/user.controller';

const router = Router();

router.route('/login').post(login);


router.route('/register').post(register);

router.route('/users').get(findAllUser);


export default router;