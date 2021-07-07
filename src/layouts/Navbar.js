import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid d-flex" style={{backgroundColor:'white',position:'sticky',top:'0',zIndex:'1080'}}>
                <div className="col-md-2">
                    <Link className="navbar-brand d-flex align-items-center justify-content-center p-5" style={{ fontFamily: 'cursive',color:'black',borderRight:'1px solid black' }} to="/">Gaming Bazaar</Link>

                </div>
                <div className="col-md-10 pt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <form className="mx-3" style={{ border: '1px solid red' }}>
                                <div className="container d-flex align-items-center p-1">
                                    <i className="bi bi-search text-danger p-2"></i>
                                    <input className="form-control me-2" style={{ border: 'none' }} type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn bg-danger text-white" type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-1">
                            <p className="text-center" style={{color:'black',fontWeight:'bold'}}>Call Us<br />
                                9844363201
                            </p>
                        </div>
                        <div className="col-md-3">
                            <ul className="d-flex">
                                <li className="list-unstyled"><Link to="/my-account" className="text-decoration-none"><i class="bi bi-person p-3" style={{color:'black',fontSize:'25px'}}></i></Link></li>
                                <li className="list-unstyled"><Link to="" className="text-decoration-none"><i class="bi bi-heart p-3" style={{color:'black',fontSize:'25px'}}></i></Link></li>
                                <li className="list-unstyled"><Link to="" className="text-decoration-none"><i class="bi bi-basket p-3" style={{color:'black',fontSize:'25px'}}></i></Link></li>
                            </ul>
                        </div>
                    </div>

                    <nav className="navbar navbar-expand-lg navbar-light">


                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/shop">Shop</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Categories
                                </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="#">Action</Link></li>
                                            <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about-page">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact-page">Contact</Link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>

            </div>

        </>
    )
}

export default Navbar
