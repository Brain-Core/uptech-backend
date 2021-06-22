const router = require('express').Router();

const Impact = require('../models/impact.model');

const About = require('../models/about.model');
const Team = require('../models/team.model');
const { upload } = require('../helper/helper');

//  ############ API TEST ###################

// test routes
router.get('/testAPI', (req, res) => {
    res.json('UP-Tech API works perfectly ...')
});


//  ############ IMPACTS ###################

// save a impact

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

// save a team member
router.post('/team', upload.single('photo'), async (req, res) => {
    try {
        const newTeam = new Team({
            completeName: req.completeName,
            position: req.position,
            photo: req.file.path
        });

        const saveTeam = await newTeam.save();
        return res.json(saveTeam);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

// get team members
router.get('/team', async (req, res) => {
    try {
        const teams = await Team.find();
        return res.json(teams);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

// get a particular team member
router.get('/team/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        return res.json(team);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

// update a team member info
router.put('/team', upload.single('photo'), async (req, res) => {
    try {
        const newTeamMemberData = {
            completeName: req.completeName,
            position: req.position,
            photo: req.file.path
        };

        const teamMemberUpdated = Team.findByIdAndUpdate({_id:req.params.id}, newTeamMemberData, {new: true});
        return res.json(teamMemberUpdated);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

module.exports = router;