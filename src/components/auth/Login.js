import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'


const Login = () => {
    return (
        <>
            <Navbar />

            <div className="py-5 text-center mb-3" style={{ backgroundColor: '#252525' }}>
                <h1 className="text-white m-0">My Account</h1><br />
                <p style={{ color: '#888888', fontSize: '15px' }}>
                    <Link to="/" className="home"><i class="bi bi-house px-2"></i>Home</Link>
                    &nbsp;&nbsp;&gt;
                    My Account
                </p>

            </div>

            <div className="container my-5">
                <div className="col-md-10 offset-md-1 p-5">
                    <form class="row g-5">
                        <div class="col-md-6">
                            <h3 style={{ color: '#777777' }}>Login</h3>
                            <label className="my-1" style={{ color: '#777777' }}>Username or email address</label>
                            <input className="my-1" type="text" style={{ width: '100%' }} />
                            <label className="my-1" style={{ color: '#777777' }}>Password</label>
                            <input className="my-1" type="password" style={{ width: '100%' }} />
                            <button className="btn btn-danger m-2 px-4 py-2 w-100" style={{ border: 'none', color: 'white', fontSize: '18px' }}>
                                Log In</button> <br />
                            <div class="m-3">
                                <input type="checkbox" />
                                <label className="m-1">Remember me</label>
                            </div>

                            <Link className="m-3 text-decoration-none" to="">Lost Your Password?</Link>
                        </div>
                        <div class="col-md-6">
                            <h3 style={{ color: '#777777' }}>Register</h3>
                            <label className="my-1" style={{ color: '#777777' }}>UserName</label>
                            <input className="my-1" type="text" style={{ width: '100%' }} />
                            <label className="my-1" style={{ color: '#777777' }}>Email address</label>
                            <input className="my-1" type="text" style={{ width: '100%' }} />
                            <label className="my-1" style={{ color: '#777777' }}>Password</label>
                            <input className="my-1" type="password" style={{ width: '100%' }} />
                            <p className="mt-2">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                            <button className="btn btn-danger m-2 px-4 py-2 w-100" style={{ border: 'none', color: 'white', fontSize: '18px' }}>
                                Register</button> <br />

                        </div>

                    </form>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login
