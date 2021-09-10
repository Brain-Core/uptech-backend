import './SideBar.css';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div className="sidebar bg-dark">
            <h2 className="text-white font-weight-bold m-2">DashBord</h2>
            <div className="mt-4 menu">
                <Link to="/" className="btn btn-primary rounded m-2">Team</Link>
                <Link to="/product" className="btn btn-primary rounded m-2">Product</Link>
                <Link to="/partner" className="btn btn-primary rounded m-2">Partners</Link>
            </div>
        </div>
    )
}

export default SideBar
