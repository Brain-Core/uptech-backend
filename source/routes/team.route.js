import controller from '../controller/team.controller';
import { Router } from 'express';
import { upload } from '../helper/helper';

let route = Router()

// router /teams
// @desc get
// @access public
route.get('/', controller.getTeamMember);


// router /teams/:id
// @desc get
// @access public
route.get('/:id',controller.getOneTeamMember)



// router /teams/post
// @desc post
// @access public
route.post('/post', upload.single('avatar'),controller.insertTeamMembers);


// router /teams/edit/:id
// @desc put
// @access public
route.put('/edit/:id', upload.single('avatar'), controller.updateTeamMember)

// router /teams/delete/:id
// @desc delete
// @access public

route.delete('/delete/:id',upload.single('avatar'), controller.deleteTeamMember)

export default route;