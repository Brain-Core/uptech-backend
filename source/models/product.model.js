import mongoose from '../helper/dbconnect';

const ProductSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    photo:{
        type: String,
        required: true
    }
});

export default mongoose.model('products', ProductSchema);