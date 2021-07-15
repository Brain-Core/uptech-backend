import cloudinary from 'cloudinary';
import config from 'config';

let cloud = cloudinary.v2;

cloud.config({
    cloud_name: config.get("cloud_name"),
    api_key: config.get("API_KEY"),
    api_secret: config.get("API_SECRET")
})

export default cloud;