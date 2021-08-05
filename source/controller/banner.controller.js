import BannerModel from '../models/banner.model';
import cloudinary from '../helper/cloudinary';

async function insertBanner(req,res) {
    const name = req.body.name;
    const url_image = req.file.path;
    const result = await cloudinary.uploader.upload(url_image);

    const new_banner = new BannerModel({
        name,
        image: result.secure_url,
        cloud_id: result.public_id
    });

    const response = await new_banner.save();

    return res.json(response);

}


async function getAllBanner(req,res) {
    const result = await BannerModel.find();
    return res.json(result);
}


export default {
    insertBanner,
    getAllBanner
}
