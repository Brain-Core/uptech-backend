
import TeamModel from '../models/team.model';


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
const insertTeamMembers = (req,res) =>{
    const { completeName, address, email, phone,position} = req.body;
    const p = req.file.path
    const avatar = p.substring(68);

    //validation, check if all fieal are filled

    if(!completeName || !address || !email || !phone || !position || !avatar) return res.status(501).json(
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
            let newMember = new TeamModel({completeName, address,email,phone,position,avatar});
            return newMember.save()
            .then(team=> {
                res.json(team)
            })
            .catch(err => res.json({MsgError: err}));
        }
    })
    .catch();
    

} 



// ++++++++++++++++++++ update one team member in the database ++++++++++++++++++++++
const updateTeamMember = (req, res) => {
    const { completeName, address, email, phone,position} = req.body;
    const p = req.file.path
    const avatar = p.substring(68);
    const id = req.params.id;
    const upfield = {completeName, address, email, phone,position,avatar};

    TeamModel.findByIdAndUpdate({_id:id}, upfield, {new: true})
    .then(team => res.json({
        team:{
            id: team.id,
            completeName: team.completeName
        }
    }))
    .catch(err => res.json({MsgError: err}));

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