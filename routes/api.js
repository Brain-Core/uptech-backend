const router = require('express').Router();
const Product = require('../models/product.model');
const Impact = require('../models/impact.model');
const Partner = require('../models/partner.model');
const Team = require('../models/team.model');
const { upload } = require('../helper/helper');

//  ############ API TEST ###################

// test routes
router.get('/testAPI', (req, res) => {
    res.json('UP-Tech API works perfectly ...')
});

//  ############ PRODUCTS ###################

// save a product
router.post('/products', upload.single('photo'), async (req, res) => {
    try {
        const newProduct = new Product({
            name: req.name,
            photo: req.file.path
        });

        const saveProduct = await newProduct.save();
        return res.json(saveProduct);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

// get products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

// get a particular product
router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.json(product);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

module.exports = router;