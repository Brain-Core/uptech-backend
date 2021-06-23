const router = require('express').Router();

const About = require('../models/about.model');

const { upload } = require('../helper/helper');

//  ############ API TEST ###################

// test routes
router.get('/testAPI', (req, res) => {
    res.json('UP-Tech API works perfectly ...')
});


//  ############ ABOUT ###################

// save the about
router.post('/about', upload.single('photo'), async (req, res) => {
    try {
        const newAbout = new about({text: req.text});

        const saveAbout = await newAbout.save();
        return res.json(saveAbout);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

// get the about
router.get('/about/:id', async (req, res) => {
    try {
        const about = await About.findById(req.params.id);
        return res.json(about);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

// update the about
router.put('/about/:id', async (req, res) => {
    try {
        const newAboutData = {text: req.text};

        const aboutUpdated = About.findByIdAndUpdate({_id:req.params.id}, newAboutData, {new: true});
        return res.json(aboutUpdated);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

//  ############ TEAM ###################



module.exports = router;