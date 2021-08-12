import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h4 className="navbar-brand">Admin</h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarColor02">
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

                    <ul className='navbar-nav'>
                        <li className="nav-item dropdown">
                                <Link to='' className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                                <div className="dropdown-menu">
                                    <Link to='#' className="dropdown-item">Action</Link> 
                                    <Link to='#' className="dropdown-item">Another action</Link> 
                                    <Link to='#' className="dropdown-item">Something else here</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to='#' className="dropdown-item">Separated link</Link>
                                </div>
                            </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar
