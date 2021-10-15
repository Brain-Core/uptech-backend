import { Router } from 'express';
import { register , login} from '../controller/user.controller';

const router = Router();

router.route('/login').post(login);


router.route('/register').post(register);


export default router;