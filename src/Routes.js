import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Login from './components/auth/Login'
import Contact from './components/Contact'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'
import Shop from './components/Shop'

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-page" component={AboutUs} />
                    <Route exact path="/contact-page" component={Contact} />
                    <Route exact path="/productdetail" component={ProductDetail} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/my-account" component={Login}/>
                </Switch>
            </Router>
        </>
    )
}

export default Routes
