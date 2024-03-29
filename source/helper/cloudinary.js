import cloudinary from 'cloudinary';

let cloud = cloudinary.v2;

cloud.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

export default cloud;