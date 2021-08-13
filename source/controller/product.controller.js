import Product from '../models/product.model';
import cloudinary from '../helper/cloudinary';


// ###### insert product in the database controller

async function insertProduct(req, res){
   const  namep  = req.body.namep;
   const image = req.file.path; 
    let result = await cloudinary.uploader.upload(image)
   
   
     Product.findOne({namep})
        .then(product =>{
            if(product) {
                return res.json({msg: 'product already exists !!!!!'})
            }else{
                
                let newProduct = new Product({
                    namep: namep,
                    photo: result.secure_url,
                    cloudinary_id: result.public_id
                });
        
                newProduct.save()
                .then(product=> {
                    res.json(product)
                });
                
            }
        }
        )
        .catch(err=> res.json({err}));
}


// ############# get all products ######################
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
}


// ############## get one single product by its id ###################

const getOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.json(product);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
}



// ############## edit one single product by its id #######

const updateProduct = async (req, res) => {
     
    try {
        const name = req.body.namep;
        const image = req.file.path;
        let result = await cloudinary.uploader.upload(image);

        const newProductData = {
            name,
            photo: result.secure_url
        };

        const productUpdated = await Product.findByIdAndUpdate(
            {_id:req.params.id}, 
            newProductData, 
            {new: true}
            );
        return res.json(productUpdated);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
}



//##### delete a single product by its id ######

const deleteOneProduct = async (req,res)=>{
    try {
        const productUpdated = await Product.findOneAndDelete(
            {_id:req.params.id}
            );
        return res.json(productUpdated);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
}



export default {
    insertProduct,
    getOneProduct,
    getProducts,
    updateProduct,
    deleteOneProduct
}