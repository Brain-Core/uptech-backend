import mongoose from '../helper/dbconnect';

const ImpactSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    photo:{
        type: String,
        required: true
    },
    cloud_id:{
        type: String
    }
});


ImpactSchema.method('transform', function() {
    let obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});

export default mongoose.model('impacts', ImpactSchema);