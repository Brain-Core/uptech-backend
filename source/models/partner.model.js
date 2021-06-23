import mongoose from '../helper/dbconnect';

const PartnerSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    logo:{
        type: String,
        required: true
    }
});

export default mongoose.model('partners', PartnerSchema);