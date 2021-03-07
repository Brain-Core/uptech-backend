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

// update a product
router.put('/products', upload.single('photo'), async (req, res) => {
    try {
        const newProductData = {
            name: req.name,
            photo: req.file.path
        };

        const productUpdated = Product.findByIdAndUpdate({_id:req.params.id}, newProductData, {new: true});
        return res.json(productUpdated);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});


//  ############ PARTNERS ###################

// save a partner
router.post('/partners', upload.single('logo'), async (req, res) => {
    try {
        const newPartner = new Partner({
            name: req.name,
            logo: req.file.path
        });

        const savePartner = await newPartner.save();
        return res.json(savepartner);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});


// get partners
router.get('/partners', async (req, res) => {
    try {
        const partners = await Partner.find();
        return res.json(partners);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

// get a particular partner
router.get('/partners/:id', async (req, res) => {
    try {
        const partner = await Partner.findById(req.params.id);
        return res.json(partner);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});


module.exports = router;