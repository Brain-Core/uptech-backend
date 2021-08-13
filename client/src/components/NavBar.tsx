import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h4 className="navbar-brand">Admin</h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link " >Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/partner' className="nav-link">Partner</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='#' className="nav-link">Team</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='#' className="nav-link">Impact</Link>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar
