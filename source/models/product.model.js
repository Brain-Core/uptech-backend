import mongoose from '../helper/dbconnect';

const ProductSchema = mongoose.Schema({
    namep: {
        type: String, 
        required: true
    },
    photo:{
        type: String,
        required: true
    },
    cloudinary_id: {
        type: String,
    }
});

export default mongoose.model('products', ProductSchema);