import User from '../models/user.model';
import { compare  } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import 'dotenv/config';
import ErrorResponse from '../helper/error';

export async function register(req, res, next){
    const { name, email, password} = req.body;

    try {
        const user = await User.create({
            name, email, password
        })

        res.status(201).json({
            success: true,
        })
    } catch (error) {
        next(error)
    }

}



export async function login(req, res, next){
    const { email, password } = req.body;
    if(!email || !password) return next(new ErrorResponse("please provider email and password",404));

    try {
        const user = await await User.findOne({ email}).select("+password");

        if(!user) return next(new ErrorResponse("user does not exist",404));

        const isMatch = await compare(password, user.password);

        if(!isMatch) return next(new ErrorResponse("invalid password!!",400));

        res.status(200).json({
            success: true,
            accessToken: sign({id: user._id}, process.env.access_token, {expiresIn:"15d"})
        })

    } catch (error) {
        next(error)
    }
}


export const findAllUser = async (req,res,next) =>{
    try {
        const users = await User.find().select("-password");
        return res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}