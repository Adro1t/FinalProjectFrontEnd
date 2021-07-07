import React from 'react'
import Card from '../layouts/Card'
import Carousel from '../layouts/Carousel'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />

            {/* FeatureProducts */}
            <div className="text-center py-5" style={{ backgroundColor: '#f6f6f6' }}>
                <h1 style={{ color: '#6ec1e4', fontSize: '50px', textTransform: 'uppercase', fontWeight: 'bolder' }}>Feature Products</h1>
                <p className="m-0 mb-5">Visit Our Shop to see amazing products</p>
                <div className="row row-cols-1 row-cols-md-5 g-4 p-0 m-0">
                <Card />
                </div>
            </div>




            <div className="d-flex" style={{ backgroundColor: '#252525' }}>
                <div className="col-md-4 d-flex p-5 align-items-center justify-content-center">
                    <i className="bi bi-truck py-2 px-3" style={{ color: '#6ec1e4', fontSize: '30px', fontWeight: 'bold', borderRadius: '50%', border: '2px solid #6ec1e4' }}></i>
                    <div className="text-white mx-3" style={{ letterSpacing: '0px' }}>
                        <p className="d-flex mb-0" style={{ fontSize: '17px', fontWeight: 'bold', textTransform: 'uppercase' }}><p className="mb-0" style={{ color: '#EF3636' }}>Email</p>&nbsp;Delivery</p>
                        <p style={{ fontSize: '15px' }}>Within 24 hour Delivery</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex p-5 align-items-center justify-content-center">
                    <i className="bi bi-wallet2 py-2 px-3" style={{ color: '#6ec1e4', fontSize: '30px', fontWeight: 'bold', borderRadius: '50%', border: '2px solid #6ec1e4' }}></i>
                    <div className="text-white mx-3">
                        <p className="d-flex mb-0" style={{ fontSize: '17px', fontWeight: 'bold', textTransform: 'uppercase' }}><p className="mb-0" style={{ color: '#EF3636' }}>safe</p>&nbsp;payments</p>
                        <p style={{ fontSize: '15px' }}>eSewa or, Bank Transfer</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex p-5 align-items-center justify-content-center">
                    <i className="bi bi-trophy py-2 px-3" style={{ color: '#6ec1e4', fontSize: '30px', fontWeight: 'bold', borderRadius: '50%', border: '2px solid #6ec1e4' }}></i>
                    <div className="text-white mx-3">
                        <p className="d-flex mb-0" style={{ fontSize: '17px', fontWeight: 'bold', textTransform: 'uppercase' }}><p className="mb-0" style={{ color: '#EF3636' }}>quality</p>&nbsp;inspection</p>
                        <p style={{ fontSize: '15px' }}>All Genuine Products</p>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}

export default Home
