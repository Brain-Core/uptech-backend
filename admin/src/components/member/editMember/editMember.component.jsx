import React from 'react'
import './editMember.component.css';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import PublishIcon from '@material-ui/icons/Publish';
import { Link } from 'react-router-dom';

function EditMember() {
    return (
        <div className="editMember">
            <div className="editMember__container_title">
                <h3 className="font-weight-bold">Edit Member</h3>
                <Link to="/newmember">
                    <button className="btn btn-success rounded">Create</button>
                </Link>
                
            </div>

            <div className="editMember__container">
                <div className="editMember__showCase">
                    <div className="editMember__showCaseTop">
                        <img 
                        src="https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg" 
                        alt="" 
                        className="editMember__showCaseImg"/>
                        <div className="editMember__showCaseTop__title">
                            <span className="editMember__showCase__Fullname">Venceslas Burongo</span>
                            <span className="editMember__showCase_age">24</span>
                        </div>
                    </div>
                    <div className="editMember__showCaseBottom">
                        <span className="editMember__showCaseBottom__title">Identity Details</span>
                       <div className="editMember__showCaseBottomInfo">
                        <PermIdentityIcon className="editMember__showCaseBottom__icon"/>
                        <span className="editMember__showCaseBottomInfo__title">venceslas99</span>
                       </div>
                       <div className="editMember__showCaseBottomInfo">
                        <CalendarTodayIcon className="editMember__showCaseBottom__icon"/>
                        <span className="editMember__showCaseBottomInfo__title">10.12.1999</span>
                       </div>
                       <span className="editMember__showCaseBottom__title">Contact Details</span>
                       <div className="editMember__showCaseBottomInfo">
                        <PhoneIcon className="editMember__showCaseBottom__icon"/>
                        <span className="editMember__showCaseBottomInfo__title">+243 999 000 255</span>
                       </div>
                       <div className="editMember__showCaseBottomInfo">
                        <MailOutlineIcon className="editMember__showCaseBottom__icon"/>
                        <span className="editMember__showCaseBottomInfo__title">bvenceslas@gmail.com</span>
                       </div>
                       <div className="editMember__showCaseBottomInfo">
                        <RoomIcon className="editMember__showCaseBottom__icon"/>
                        <span className="editMember__showCaseBottomInfo__title">D.R.Congo | Goma</span>
                       </div>
                       
                    </div>
                </div>


                <div className="editMember__form">
                    <div>
                    <span className="editMember__formTitle">Update Member</span>
                        <form className="form">
                            <div className="form-group">
                                <label>FullName</label>
                                <input type="text" name="fullname" placeholder="Fullname" className="form-control "/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Your email" className="form-control "/>
                            </div>
                            <div className="form-group">
                                <label>Adress</label>
                                <input type="text" name="adress" placeholder="Country | City" className="form-control "/>
                            </div>
                            <div className="form-group">
                                <label>Birthday</label>
                                <input type="date" name="date"  className="form-control "/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="phone" name="phone" placeholder="Your phone Number" className="form-control rounded"/>
                            </div>
                        </form>
                    </div>

                    <div className="editMember__formProfile">
                        <div className="editMember__formProfile_picture">
                            <img 
                            src="https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg" 
                            className="editMember__formImage"
                            alt=""
                            />
                            <input type="file" style={{display:'none'}} id="file" />
                            <label htmlFor="file">
                             <PublishIcon  className="editMember__form_icon"/>
                            </label>
                        </div>
                        <button className="btn btn-primary rounded">UpDate</button>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default EditMember
