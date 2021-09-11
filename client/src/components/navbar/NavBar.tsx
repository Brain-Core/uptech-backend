import './NavBar.css';
import { NotificationsNone, Settings } from "@material-ui/icons";

function NavBar() {
    return (
        <nav className="topbar navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand font-weight-bold" href="#">uptechadmin</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link topbarIconContainer" href="#">
                                <NotificationsNone/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link topbarIconContainer" href="#">
                                <Settings/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
