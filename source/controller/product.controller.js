import Product from '../models/product.model';


// ###### insert product in the database controller

async function insertProduct(req, res){
   
    try {
        let str = req.file.path
        const newProduct = new Product({
            name: req.body.name,
            photo: str.substring(68)
        });

        const saveProduct = await newProduct.save();
        return res.json(saveProduct);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
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
        const newProductData = {
            name: req.name,
            photo: req.file.path
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