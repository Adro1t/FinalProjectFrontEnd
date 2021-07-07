import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../layouts/Card'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

const Shop = () => {
    return (
        <>
            <Navbar />
            <div className="py-5 text-center mb-3" style={{ backgroundColor: '#252525' }}>
                <h1 className="text-white m-0">Shop</h1><br />
                <p style={{ color: '#888888', fontSize: '15px' }}>
                    <Link to="/" className="home"><i class="bi bi-house px-2"></i>Home</Link>
                    &nbsp;&nbsp;&gt;
                    Shop
                </p>

            </div>

            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-3 ">
                        <h5>Product Categories</h5>
                        <hr />
                        <ul className="list-unstyled p-2">
                            <li>Category 1</li>
                            <li>Category 1</li>
                            <li>Category 1</li>
                            <li>Category 1</li>
                            <li>Category 1</li>

                        </ul>
                    </div>
                    <div className="col-md-9 ">
                        <div className="row row-cols-1 row-cols-md-4 g-4 p-0 m-0">

                            <Card />
                        </div>
                    </div>
                </div>
            </div>
                <Footer />
        </>
    )
}

export default Shop
