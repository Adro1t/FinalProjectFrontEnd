import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

const Footer = () => {
    return (
        <>
            <div className="container-fluid row" style={{ backgroundColor: '#f6f6f6' }}>
                <div className="col-md-9 d-flex py-5">
                    <ul className="mx-4">
                        <p style={{ fontSize: '17px', fontWeight: 'bold', letterSpacing: '-1px', textTransform: 'uppercase' }}>Information</p>
                        <li className="list-unstyled m-2"><Link to="/about-page" className="text-decoration-none">About Page</Link></li>
                        <li className="list-unstyled m-2"><Link to="" className="text-decoration-none">Brands</Link></li>
                        <li className="list-unstyled m-2"><Link to="" className="text-decoration-none">Gift Vouchers</Link></li>
                        <li className="list-unstyled m-2"><Link to="" className="text-decoration-none">Site Map</Link></li>
                        <li className="list-unstyled m-2"><Link to="" className="text-decoration-none">Accessories</Link></li>

                    </ul>

                    <ul className="mx-4">
                        <p style={{ fontSize: '17px', fontWeight: 'bold', letterSpacing: '-1px', textTransform: 'uppercase' }}>My Account</p>
                        <li className="list-unstyled m-2"><Link to="" className="text-decoration-none">My Account</Link></li>
                        <li className="list-unstyled m-2"><Link to="" className="text-decoration-none">Order History</Link></li>
                        <li className="list-unstyled m-2"><Link to="" className="text-decoration-none">WishList</Link></li>
                    </ul>

                    <ul className="mx-4">
                        <p style={{ fontSize: '17px', fontWeight: 'bold', letterSpacing: '-1px', textTransform: 'uppercase' }}>Services</p>
                        <li className="list-unstyled m-2"><Link to="" className="text-decoration-none">Special Offers</Link></li>
                        <li className="list-unstyled m-2"><Link to="" className="text-decoration-none">Our Brands</Link></li>
                        <li className="list-unstyled m-2"><Link to="" className="text-decoration-none">Shipping & Returns</Link></li>
                        <li className="list-unstyled m-2"><Link to="" className="text-decoration-none">Affiliates</Link></li>

                    </ul>



                </div>
                <div className="col-md-3 py-5">
                    <p style={{ fontSize: '15px', fontWeight: 'bold', letterSpacing: '-1px', textTransform: 'uppercase' }}>Contact us</p>

                    <p style={{ fontSize: '15px' }}>If you have any question, please contact us at <br />
                        <Link to="" className="text-decoration-none" style={{ fontSize: '15px', color: '#ef3636' }}>support@gamingbazar.com</Link><br />
                    </p>
                    <span className="d-flex">
                        <i class="bi bi-geo-alt" style={{ fontSize: '40px' }}></i><p className="p-2" style={{ fontSize: '15px' }}>ShantiMarga, Kathmandu, Nepal<br />
                    44600<br /></p>
                    </span>
                    <span className="d-flex">
                        <i class="bi bi-phone" style={{ fontSize: '40px' }}></i>
                        <p className="p-2" style={{ fontSize: '27px', fontWeight: 'bold', color: '#ef3636' }}>9844363201
                    </p>
                    </span>

                </div>
            </div>
            <div className="text-center text-white py-3" style={{ backgroundColor: '#252525' }}>
                Copyright &copy 2021 <Link to="" className="text-decoration-none" style={{ color: '#EF3636' }}>Gaming Bazaar</Link>. All Rights Reserved
            </div>
        </>
    )
}

export default Footer
