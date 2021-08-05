import mongoose from '../helper/dbconnect';

const BannerSchema = mongoose.Schema({
   name:{
       type: String,
       required: true
   },
   image:{
       type: String,
       required:true
   },
    cloud_id:{
        type: String
    }
});

export default mongoose.model('banner', BannerSchema);