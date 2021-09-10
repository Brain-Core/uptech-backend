import mongoose from '../helper/dbconnect';

const TeamSchema = mongoose.Schema({
    completeName: {
        type: String, 
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone: {
        type: String, 
        required: true
    },
    position: {
        type: String, 
        required: true
    },
    avatar:{
        type: String,
        required: true
    },
    cloudi_id:{
        type: String
    }
});


TeamSchema.method('transform', function() {
    let obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});

export default mongoose.model('teams', TeamSchema);