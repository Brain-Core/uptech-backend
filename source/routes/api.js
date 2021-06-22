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
router.post('/impacts', upload.single('photo'), async (req, res) => {
    try {
        const newImpact = new impact({
            title: req.title,
            description: req.description,
            photo: req.file.path
        });

        const saveImpact = await newImpact.save();
        return res.json(saveImpact);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

// get impacts
router.get('/impacts', async (req, res) => {
    try {
        const impacts = await Impact.find();
        return res.json(impacts);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

// get a particular impact
router.get('/impacts/:id', async (req, res) => {
    try {
        const impact = await Impact.findById(req.params.id);
        return res.json(impact);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
});

// update a impact
router.put('/impacts/:id', upload.single('photo'), async (req, res) => {
    try {
        const newImpactData = {
            title: req.title,
            description: req.description,
            photo: req.file.path
        };

        const impactUpdated = Impact.findByIdAndUpdate({_id:req.params.id}, newImpactData, {new: true});
        return res.json(impactUpdated);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
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