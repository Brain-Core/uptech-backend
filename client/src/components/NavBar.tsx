import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h4 className="navbar-brand">Admin</h4>
                

                <div className="d-flex">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link " >Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='#' className="nav-link">Partner</Link>
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
