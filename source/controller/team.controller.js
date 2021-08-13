
import TeamModel from '../models/team.model';
import cloudinary from '../helper/cloudinary';


// get all team members 
const getTeamMember = async (req,res)=>{
    await TeamModel.find()
    .then(teams => res.json(teams))
    .catch(err=> res.json({MsgError: err}))
}

// get one team member

const getOneTeamMember = async (req,res)=>{
    const id = req.params.id
    await TeamModel.findById(id)
    .then(team => res.json(team))
    .catch(err=> res.json({MsgError: err}))
}

// ++++++++++++++++++++ register team member in the database ++++++++++++++++++++++
const insertTeamMembers = async (req,res) =>{
    const { completeName, address, email, phone,position} = req.body;
    const url = req.file.path;
    let result = await cloudinary.uploader.upload(url);

    //validation, check if all fieal are filled

    if(!completeName || !address || !email || !phone || !position || !url) return res.status(501).json(
        {
            Warning: 'All fields must be fill'
        }
        );
    TeamModel.findOne({completeName})
    .then(team => {
        // check if the member is not exists yet, to not register him twice
        if(team){
            return res.json({msg: 'team member already exists'})
        }else{
            let newTeam = new TeamModel(
                {
                completeName, 
                address,
                email,
                phone,
                position,
                avatar: result.secure_url, 
                cloudi_id: result.public_id
            });
            newTeam.save()
            .then(team => res.json(team))
            
            
        }
    })
    .catch();
    

} 



// ++++++++++++++++++++ update one team member in the database ++++++++++++++++++++++
const updateTeamMember = async (req, res) => {
    const { completeName, address, email, phone,position} = req.body;
    const url = req.file.path
    const result = await cloudinary.uploader.upload(url);
    const id = req.params.id;
    const upfield = {completeName, address, email, phone,position,avatar: result.secure_url};

    const teamUpdate = await TeamModel.findByIdAndUpdate({_id:id}, upfield, {new: true})
    return res.json({
        completeName: teamUpdate.completeName
    })

}



// ++++++++++++++++++++ delete team member in the database ++++++++++++++++++++++

const deleteTeamMember = (req, res) => {
    const id = req.params.id;
    TeamModel.findByIdAndDelete({_id:id})
    .then(team => res.json({
        team: {
            id: team.id,
            completeName: team.completeName
        }
    }))
    .catch(err => res.json({MsgError: err}))
}




export default {
    getTeamMember,
    getOneTeamMember,
    insertTeamMembers,
    updateTeamMember,
    deleteTeamMember
}