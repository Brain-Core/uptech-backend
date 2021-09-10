import { Link } from 'react-router-dom';
import { useAddTeamMutation } from '../../slices/teamSlice';

function Addteam() {
    return (
        <div className="other">
            <div className="p-4">
                <h3 className="font-weight-bold text-center">Add Member</h3>
                <div className="card p-2">
                    <form className="form">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Full name .." />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Address .." />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email  .."/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Phone  .."/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Position .."/>
                        </div>
                        <div className="form-group">
                            <input type="file" className="form-control" />
                        </div>
                       
                        <button className="btn btn-secondary rounded mr-2">edit</button>
                        <Link className="btn btn-info rounded" to="/">cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addteam
