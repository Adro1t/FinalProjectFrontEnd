import React from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

const ProductDetail = () => {
    return (
        <>

            <Navbar />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/carddemo.jpg" width="100%" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <h2>Name</h2>
                        <p>Description</p>
                        <p style={{ fontSize: '25px', fontWeight: 'bold', color: '#ef3636' }}>Price</p>
                        <hr />
                        <p>Category</p>
                        <button className="btn btn-danger w-100">Add to Cart</button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ProductDetail
