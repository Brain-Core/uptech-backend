import mongoose from '../helper/dbconnect';
import { hash, genSalt } from 'bcryptjs';


const UserModel = new mongoose.Schema({
    name: {
        type:String,
        required: [true,"please provider the name"]
    },
    email: {
        type: String,
        required: [true, "please provider the Email"],
        unique: true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"please provider a valider email"]
    },
    password: {
        type: String,
        required: [true,"provider the passowrd "],
        minLength: 6,
        select: false
    }
})


// UserModel.method('transform', function() {
//     let obj = this.toObject();

//     //Rename fields
//     obj.id = obj._id;
//     delete obj._id;

//     return obj;
// });

UserModel.method('toClient', function() {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});


// hashing password before saving it to the data base
UserModel.pre('save', async function(next){
    if(!this.isModified("password")){
        next();
    }

    const salt = await genSalt(10);
    this.password = await hash(this.password, salt)
});


UserModel.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
  });




export default mongoose.model("user", UserModel);