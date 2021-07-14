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

export default mongoose.model('teams', TeamSchema);