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

export default mongoose.model('impacts', ImpactSchema);