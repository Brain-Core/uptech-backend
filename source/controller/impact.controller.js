import impactModel from "../models/impact.model";


// get impacts
const getImpact = (req, res) => {
   impactModel.find()
   .then(impacts => res.json(impacts))
   .catch(err=> res.json({errorMessage: error}));
}

// get a particular impact
const getOneImpact = (req, res) => {
    impactModel.findById(req.params.id)
    .then(impacts => res.json(impacts))
    .catch(err=> res.json({errorMessage: error}));
}


const insertImpact = (req, res) => {
    const { title , description } = req.body;
    const p = req.file.path;
    const photo = p.substring(68);
    if(!title || !description || !photo) return res.status(501).json({Warning: 'please fill all fields !!'});

        impactModel.findOne({title})
        .then(impact => {
            if(impact){
                return res.status(501).json({Warning: 'impact already exists'});
            }
            else{
                const newImpact = new impactModel({
                    title,
                    description,
                    photo
                });
                return newImpact.save()
                .then(impact => res.json(impact))
                .catch(err => res.json(err));
            }
        })
        
}



// update a impact
const updateImpact = async (req, res) => {
    const { title , description } = req.body;
    const p = req.file.path;
    const photo = p.substring(68);
    try {
        const newImpactData = {
            title,
            description,
            photo
        };

        const impactUpdated = impactModel.findByIdAndUpdate({_id:req.params.id}, newImpactData, {new: true});
        return res.json(impactUpdated);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
}


// delete one 
const deleteImpact = (req,res) => {
    const id = req.params.id;

    impactModel.findByIdAndDelete({_id:id})
    .then(impact=> res.json({i: {id:impact.id}}))
    .catch(err => console.log(err));
}


export default {
    getImpact,
    getOneImpact,
    insertImpact,
    updateImpact,
    deleteImpact
}