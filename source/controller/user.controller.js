import User from '../models/user.model';
import { compare  } from 'bcryptjs';


export async function register(req, res, next){
    const { name, email, password} = req.body;

    try {
        const user = await User.create({
            name, email, password
        })

        res.status(201).json({
            success: true,
            accessToken: User.getSignToken()
        })
    } catch (error) {
        next(error);
    }

}



export async function login(req, res, next){
    const { email, password } = req.body;
    if(!email || !password) return res.status(401).json("please provider email and password");

    try {
        const user = await await User.findOne({ email}).select("+password");

        if(!user) return res.status(404).json("user does not exist");

        const isMatch = compare(password, user.password);

        if(!isMatch) return res.status(400),json("invalid password!!");

        res.status(201).json({
            success: true,
            accessToken: User.getSignToken()
        })

    } catch (error) {
        next(error)
    }
}