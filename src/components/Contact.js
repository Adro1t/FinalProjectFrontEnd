import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="py-5 text-center mb-3" style={{ backgroundColor: '#252525' }}>
                <h1 className="text-white m-0">Contact</h1><br />
                <p style={{ color: '#888888', fontSize: '15px' }}>
                    <Link to="/" className="home"><i class="bi bi-house px-2"></i>Home</Link>
                    &nbsp;&nbsp;&gt;
                    Contact
                </p>

            </div>

            <div className="container-fluid my-5">
                <div className="row g-2">
                    <div className="col-md-4 p-4">

                        <p style={{ color: '#888888' }}>GET IN TOUCH</p>

                        <h5 style={{ fontSize: '30px', color: '#6ec1e4' }}>Visit one of our agency locations or<br />
                        contact us today</h5>
                        <h5 className="my-3" style={{ color: '#6ec1e4' }}>Head Office</h5>
                        <p className=""><i class="bi bi-map p-2"></i>Everest marga, House number 10/1556, Kathmandu, Nepal 44600<br/>
                        <i class="bi bi-envelope p-2"></i>console.bazaar@hotmail.com<br/>
                        <i class="bi bi-telephone p-2"></i>+9779819382062<br/>
                        <i class="bi bi-clock p-2"></i>Sunday to Friday : 10.00am to 18.pm<br/>
                        </p>



                    </div>
                    <div className="col-md-8">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9042264354366!2d85.32945841470097!3d27.68935483289012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19404cda4a29%3A0x4fa141e0c5448df3!2sConsole%20Bazar!5e0!3m2!1sen!2snp!4v1622548597651!5m2!1sen!2snp" width="100%" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
