const router = require('express').Router();
const Product = require('../models/product.model');
const Impact = require('../models/impact.model');
const Partner = require('../models/partner.model');
const Team = require('../models/team.model');

// test routes
router.get('/testAPI', (req, res) => {
    res.json('UP-Tech API works perfectly ...')
});

module.exports = router;