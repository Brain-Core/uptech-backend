import mongoose from '../helper/dbconnect';

const AboutSchema = mongoose.Schema({
    text: {
        type: String, 
        required: true
    }
});

export default mongoose.model('impacts', AboutSchema);