import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom'
import '../style.css'

const AboutUs = () => {
    return (
        <>
            <Navbar />

            {/* Location */}
            <div className="py-5 text-center mb-3" style={{ backgroundColor: '#252525' }}>
                <h1 className="text-white m-0">About Page</h1><br />
                <p style={{ color: '#888888', fontSize: '15px' }}>
                    <Link to="/" className="home"><i class="bi bi-house px-2"></i>Home</Link>
                    &nbsp;&nbsp;&gt;
                    About Page
                </p>

            </div>

            <div className="container-fluid my-5">
                <div className="row gx-5">
                    <div className="col-md-6">
                        <img src="/images/Mainlogopicture.jpg" className="p-2 w-100" alt="..." height="600px" />
                    </div>
                    <div className="col-md-6">

                        <h1 style={{ color: '#6ec1e4', fontSize: '30px', fontWeight: 'bolder' }}>Our Story</h1>
                        <p className="m-0 mb-5">Gaming Bazaar is an online shopping website for Nepal featuring gaming products – Gamings, accessories, gadgets and many more.<br />
                                            Gaming Bazaar aims to establish online retailing of gaming products in Nepal. We dedicate ourselves in providing best offers at unexpected prices. We believe by providing good services through our website to our valuable customers makes them happy.</p>


                        <p className="text-center" style={{ fontWeight: 'bolder' }}> "FeedBack from a Customer"<br />
                            <p className="px-5"> -Name of the Customer</p>
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-5" style={{ backgroundColor: '#f6f6f6' }}>
                <h1 className="px-5" style={{ color: '#6ec1e4', fontSize: '30px' }}>Why Choose Us</h1>

                <div class="card-group p-3 g-4">
                    <div class="card p-3 mx-3" style={{ border: 'none' }}>
                        <i class="bi bi-truck px-3 " style={{ color: '#ef3636', fontWeight: 'bold', fontSize: '35px' }}></i>
                        <div class="card-body">
                            <h5 class="card-title" style={{ color: '#6ec1e4' }}>Free Delivery</h5>
                            <p class="card-text" style={{ color: '#888888' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div class="card p-3 mx-3" style={{ border: 'none' }}>
                        <i class="bi bi-credit-card px-3 " style={{ color: '#ef3636', fontWeight: 'bold', fontSize: '35px' }}></i>
                        <div class="card-body">
                            <h5 class="card-title" style={{ color: '#6ec1e4' }}>Secure Payments</h5>
                            <p class="card-text" style={{ color: '#888888' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div class="card p-3 mx-3" style={{ border: 'none' }}>
                        <i class="bi bi-chat-left px-3 " style={{ color: '#ef3636', fontWeight: 'bold', fontSize: '35px' }}></i>
                        <div class="card-body">
                            <h5 class="card-title" style={{ color: '#6ec1e4' }}>24/7 Support</h5>
                            <p class="card-text" style={{ color: '#888888' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="py-5 mb-2">
                <h1 className="px-5" style={{ color: '#6ec1e4', fontSize: '30px' }}>Our Team</h1>

                <div class=" container-fluid row row-cols-1 row-cols-md-4 g-4 mt-4">
                    <div class="col">
                        <div class="card" style={{ border: 'none' }}>
                            <img src="/images/teammember.jpg" class="p-5" alt="..." />
                            <div class="card-body m-0 text-center" >
                                <h5 class="name card-title">Card title</h5>
                                <p>Occupation</p>
                                <Link to="/"><i class="bi bi-facebook p-2 m-2"></i></Link>
                                <Link to="/"><i class="bi bi-twitter p-2 m-2"></i></Link>
                                <Link to="/"><i class="bi bi-youtube p-2 m-2"></i></Link>
                                <Link to="/"><i class="bi bi-google p-2 m-2"></i></Link>

                                <p class="card-text mt-3" style={{ fontSize: '14px' }}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ border: 'none' }}>
                            <img src="/images/teammember.jpg" class="p-5" alt="..." />
                            <div class="card-body m-0 text-center" >
                                <h5 class="name card-title">Card title</h5>
                                <p>Occupation</p>
                                <Link to="/"><i class="bi bi-facebook p-2 m-2"></i></Link>
                                <Link to="/"><i class="bi bi-twitter p-2 m-2"></i></Link>
                                <Link to="/"><i class="bi bi-youtube p-2 m-2"></i></Link>
                                <Link to="/"><i class="bi bi-google p-2 m-2"></i></Link>

                                <p class="card-text mt-3" style={{ fontSize: '14px' }}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ border: 'none' }}>
                            <img src="/images/teammember.jpg" class="p-5" alt="..." />
                            <div class="card-body m-0 text-center" >
                                <h5 class="name card-title">Card title</h5>
                                <p>Occupation</p>
                                <Link to="/"><i class="bi bi-facebook p-2 m-2"></i></Link>
                                <Link to="/"><i class="bi bi-twitter p-2 m-2"></i></Link>
                                <Link to="/"><i class="bi bi-youtube p-2 m-2"></i></Link>
                                <Link to="/"><i class="bi bi-google p-2 m-2"></i></Link>

                                <p class="card-text mt-3" style={{ fontSize: '14px' }}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ border: 'none' }}>
                            <img src="/images/teammember.jpg" class="p-5" alt="..." />
                            <div class="card-body m-0 text-center" >
                                <h5 class="name card-title">Card title</h5>
                                <p>Occupation</p>
                                <Link to="/"><i class="bi bi-facebook p-2 m-2"></i></Link>
                                <Link to="/"><i class="bi bi-twitter p-2 m-2"></i></Link>
                                <Link to="/"><i class="bi bi-youtube p-2 m-2"></i></Link>
                                <Link to="/"><i class="bi bi-google p-2 m-2"></i></Link>

                                <p class="card-text mt-3" style={{ fontSize: '14px' }}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <Footer />
        </>
    )
}

export default AboutUs
