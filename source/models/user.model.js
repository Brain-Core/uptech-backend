import mongoose from '../helper/dbconnect';

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


UserModel.method('transform', function() {
    let obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});


export default mongoose.model("user", UserModel);