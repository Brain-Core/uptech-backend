const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    completeName: {
        type: String, 
        required: true
    },
    position: {
        type: String, 
        required: true
    },
    photo:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('teams', TeamSchema);