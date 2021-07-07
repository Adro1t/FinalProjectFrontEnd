import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

const Card = () => {
    return (
        <>
            
                <div className="col">
                    <div className="card">
                        <img src="/images/carddemo.jpg" className="card-img-top" alt="..." />
                        <div className="buttons">
                            <Link to="/"><i class="bi bi-heart py-2 px-3"></i></Link>
                            <Link to="/productdetail"><i class="bi bi-eye py-2 px-3"></i></Link>
                        </div>

                        <div className="card-body mt-2 text-center" style={{ backgroundColor: '#f6f6f6' }}>
                            <h5 className="card-title">Category</h5>
                            <p className="card-text">Name</p>
                            <p style={{color:'#ef3636',fontWeight:'bold'}}>Price</p>
                            <div className="d-flex">
                                <button className="btn" style={{ backgroundColor: 'black' }}><Link to="" className="text-white text-decoration-none" style={{ fontSize: '12px', fontWeight: 'bold' }}>Add To Cart</Link></button>
                                <button className="btn btn-danger"><Link to="/productdetail" className="text-white text-decoration-none" style={{ fontSize: '12px', fontWeight: 'bold' }}>Quick View</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/carddemo.jpg" className="card-img-top" alt="..." />
                        <div className="buttons">
                            <Link to="/"><i class="bi bi-heart py-2 px-3"></i></Link>
                            <Link to="/"><i class="bi bi-eye py-2 px-3"></i></Link>
                        </div>
                        <div className="card-body mt-2 text-center" style={{ backgroundColor: '#f6f6f6' }}>
                            <h5 className="card-title">Category</h5>
                            <p className="card-text">Name</p>
                            <p style={{color:'#ef3636',fontWeight:'bold'}}>Price</p>
                            <div className="">
                                <button className="btn" style={{ backgroundColor: 'black' }}><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Add To Cart</Link></button>
                                <button className="btn btn-danger"><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Quick View</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/carddemo.jpg" className="card-img-top" alt="..." />
                        <div className="buttons">
                            <Link to="/"><i class="bi bi-heart py-2 px-3"></i></Link>
                            <Link to="/"><i class="bi bi-eye py-2 px-3"></i></Link>
                        </div>
                        <div className="card-body mt-2 text-center" style={{ backgroundColor: '#f6f6f6' }}>
                            <h5 className="card-title">Category</h5>
                            <p className="card-text">Name</p>
                            <p style={{color:'#ef3636',fontWeight:'bold'}}>Price</p>
                            <div className="">
                                <button className="btn" style={{ backgroundColor: 'black' }}><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Add To Cart</Link></button>
                                <button className="btn btn-danger"><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Quick View</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/carddemo.jpg" className="card-img-top" alt="..." />
                        <div className="buttons">
                            <Link to="/"><i class="bi bi-heart py-2 px-3"></i></Link>
                            <Link to="/"><i class="bi bi-eye py-2 px-3"></i></Link>
                        </div>
                        <div className="card-body mt-2 text-center" style={{ backgroundColor: '#f6f6f6' }}>
                            <h5 className="card-title">Category</h5>
                            <p className="card-text">Name</p>
                            <p style={{color:'#ef3636',fontWeight:'bold'}}>Price</p>
                            <div className="">
                                <button className="btn" style={{ backgroundColor: 'black' }}><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Add To Cart</Link></button>
                                <button className="btn btn-danger"><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Quick View</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/carddemo.jpg" className="card-img-top" alt="..." />
                        <div className="buttons">
                            <Link to="/"><i class="bi bi-heart py-2 px-3"></i></Link>
                            <Link to="/"><i class="bi bi-eye py-2 px-3"></i></Link>
                        </div>
                        <div className="card-body mt-2 text-center" style={{ backgroundColor: '#f6f6f6' }}>
                            <h5 className="card-title">Category</h5>
                            <p className="card-text">Name</p>
                            <p style={{color:'#ef3636',fontWeight:'bold'}}>Price</p>
                            <div className="">
                                <button className="btn" style={{ backgroundColor: 'black' }}><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Add To Cart</Link></button>
                                <button className="btn btn-danger"><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Quick View</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/carddemo.jpg" className="card-img-top" alt="..." />
                        <div className="buttons">
                            <Link to="/"><i class="bi bi-heart py-2 px-3"></i></Link>
                            <Link to="/"><i class="bi bi-eye py-2 px-3"></i></Link>
                        </div>
                        <div className="card-body mt-2 text-center" style={{ backgroundColor: '#f6f6f6' }}>
                            <h5 className="card-title">Category</h5>
                            <p className="card-text">Name</p>
                            <p style={{color:'#ef3636',fontWeight:'bold'}}>Price</p>
                            <div className="">
                                <button className="btn" style={{ backgroundColor: 'black' }}><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Add To Cart</Link></button>
                                <button className="btn btn-danger"><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Quick View</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/carddemo.jpg" className="card-img-top" alt="..." />
                        <div className="buttons">
                            <Link to="/"><i class="bi bi-heart py-2 px-3"></i></Link>
                            <Link to="/"><i class="bi bi-eye py-2 px-3"></i></Link>
                        </div>
                        <div className="card-body mt-2 text-center" style={{ backgroundColor: '#f6f6f6' }}>
                            <h5 className="card-title">Category</h5>
                            <p className="card-text">Name</p>
                            <p style={{color:'#ef3636',fontWeight:'bold'}}>Price</p>
                            <div className="">
                                <button className="btn" style={{ backgroundColor: 'black' }}><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Add To Cart</Link></button>
                                <button className="btn btn-danger"><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Quick View</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/carddemo.jpg" className="card-img-top" alt="..." />
                        <div className="buttons">
                            <Link to="/"><i class="bi bi-heart py-2 px-3"></i></Link>
                            <Link to="/"><i class="bi bi-eye py-2 px-3"></i></Link>
                        </div>
                        <div className="card-body mt-2 text-center" style={{ backgroundColor: '#f6f6f6' }}>
                            <h5 className="card-title">Category</h5>
                            <p className="card-text">Name</p>
                            <p style={{color:'#ef3636',fontWeight:'bold'}}>Price</p>
                            <div className="">
                                <button className="btn" style={{ backgroundColor: 'black' }}><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Add To Cart</Link></button>
                                <button className="btn btn-danger"><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Quick View</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/carddemo.jpg" className="card-img-top" alt="..." />
                        <div className="buttons">
                            <Link to="/"><i class="bi bi-heart py-2 px-3"></i></Link>
                            <Link to="/"><i class="bi bi-eye py-2 px-3"></i></Link>
                        </div>
                        <div className="card-body mt-2 text-center" style={{ backgroundColor: '#f6f6f6' }}>
                            <h5 className="card-title">Category</h5>
                            <p className="card-text">Name</p>
                            <p style={{color:'#ef3636',fontWeight:'bold'}}>Price</p>
                            <div className="">
                                <button className="btn" style={{ backgroundColor: 'black' }}><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Add To Cart</Link></button>
                                <button className="btn btn-danger"><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Quick View</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/carddemo.jpg" className="card-img-top" alt="..." />
                        <div className="buttons">
                            <Link to="/"><i class="bi bi-heart py-2 px-3"></i></Link>
                            <Link to="/"><i class="bi bi-eye py-2 px-3"></i></Link>
                        </div>
                        <div className="card-body mt-2 text-center" style={{ backgroundColor: '#f6f6f6' }}>
                            <h5 className="card-title">Category</h5>
                            <p className="card-text">Name</p>
                            <p style={{color:'#ef3636',fontWeight:'bold'}}>Price</p>
                            <div className="">
                                <button className="btn" style={{ backgroundColor: 'black' }}><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Add To Cart</Link></button>
                                <button className="btn btn-danger"><Link to="" className="text-white text-decoration-none" style={{ fontSize: '14px', fontWeight: 'bold' }}>Quick View</Link></button>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    )
}

export default Card