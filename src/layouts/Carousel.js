import React from 'react'
import { Link } from 'react-router-dom'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ backgroundColor: 'black', height: '500px', flexWrap: 'nowrap' }}>
                        <img src="/images/carousel1.jpg" className="d-block w-45 px-5 h-100" style={{ position: 'absolute', right: '6%' }} alt="..." />
                        <div className="carousel-caption text-start" style={{ fontWeight: 'bolder' }}>
                            <p style={{ fontSize: '17px' }}>Online Retailer of Gaming Products in Nepal</p>
                            <h1 style={{ fontSize: '50px' }}>Deals for All Games<br />
                                and Gaming Products</h1>
                            <h2 style={{ color: '#ef3636' }}>PC, XBOX /ONE'S, PS4/PRO'S</h2>
                            <p><Link className="btn btn-lg mt-5" style={{ backgroundColor: 'white' }} to="#">Shop Now</Link></p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundColor: 'black', height: '500px' }}>
                        <img src="/images/carousel2.jpg" className="d-block w-50 h-100 mx-5" alt="..." />
                        <div className="carousel-caption text-end" style={{ fontWeight: 'bolder' }}>
                            <p style={{ fontSize: '17px' }}>Buy Codes and Products Online</p>
                            <h1 style={{ fontSize: '50px' }}>Unlimited Products with<br />
                                Gift Cards and Many More</h1>
                            <p><Link className="btn btn-lg mt-5" style={{ backgroundColor: 'white' }} to="#">Shop Now</Link></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel
