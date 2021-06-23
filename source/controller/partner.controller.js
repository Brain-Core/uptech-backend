import  Partner from '../models/partner.model';

// """""""""" insert partners """"""""""""""
const insertPartners = async (req, res) => {
    let { name } = req.body;
        try {
            await Partner.findOne({name})
            .then(partner =>{
                if(partner) {
                    return res.json({msg: 'partner already exists'})
                }
                else{
                    const newPartner = new Partner({
                        name: name,
                        logo: req.file.path
                    });
            
                    const savePartner = newPartner.save();
                    return res.json(savePartner);
                }
            })
           
            
        } catch (error) {
            return res.json({errorMessage: error});
        }
    }


// """""""""" list all partners """"""""""""""

const getPartners = async (req, res) => {
    try {
        const partners = await Partner.find();
        return res.json(partners);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
}

// """""""""" list one  partner """"""""""""""
const getOnePartner = async (req, res) => {
    try {
        const partner = await Partner.findById(req.params.id);
        return res.json(partner);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
}

// """""""""" delete partner """"""""""""""

const deleteOnePartner = async (req, res) => {
    try {

        const partnerUpdated = await Partner.findByIdAndDelete({_id:req.params.id});
        return res.json(partnerUpdated);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
}

// """""""""" update one partner by his id""""""""""""""

const updateOnePartner = async (req, res) => {
    try {
        const newPartnerData = {
            name: req.name,
            logo: req.file.path
        };

        const partnerUpdated = Partner.findByIdAndUpdate({_id:req.params.id}, newPartnerData, {new: true});
        return res.json(partnerUpdated);
        
    } catch (error) {
        return res.json({errorMessage: error});
    }
}




export default {
    insertPartners,
    deleteOnePartner,
    getOnePartner,
    getPartners,
    updateOnePartner
}