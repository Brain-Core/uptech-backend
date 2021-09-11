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


ProductSchema.method('transform', function() {
    let obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});

export default mongoose.model('products', ProductSchema);