import mongoose from '../helper/dbconnect';

const PartnerSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    logo:{
        type: String,
        required: true
    },
    cloud: {
        type: String
    }
});


PartnerSchema.method('transform', function() {
    let obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});

export default mongoose.model('partners', PartnerSchema);