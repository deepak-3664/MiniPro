import React from "react";
import {  Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Checkout from "../pages/Checkout";
import Signup from "../pages/Signup";
import { Payment } from "../pages/Payment";
import { Privacy } from "../pages/Privacy";
import FAQPage from "../pages/Faq";
import AboutUs from "../pages/AboutUs";
const Routers=()=>{
    return<Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Shop/:id' element={<ProductDetails/>} />
            <Route path='/Shop' element={<Shop/>} />
            <Route path='/Checkout' element={<Checkout/>} />
            <Route path='/sign-up' element={<Signup/>} />
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/Privacy' element={<Privacy/>}/>
            <Route path='/faq' element={<FAQPage/>}/>
            <Route path='/checkout' element={<Payment/>}/>
        </Routes>
};
export default Routers;