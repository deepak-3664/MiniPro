import React from "react";
import {  Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import Cart from "../pages/Cart";

import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import {Checkout} from "../pages/Checkout";
import { Privacy } from "../pages/Privacy";
import FAQPage from "../pages/Faq";
import AboutUs from "../pages/AboutUs";
import { Register } from "../pages/Signup";
import { Login } from "../pages/Login";
import FeedForm from "../pages/feedback";
import { Os } from "../pages/os";


const Routers=()=>{
    return<Routes>

            <Route path='/home' element={<Home/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/' element={<Login/>} />
            <Route path='/feedback' element={<FeedForm/>} />
            <Route path='/Shop/:id' element={<ProductDetails/>} />
            <Route path='/Shop' element={<Shop/>} />
            <Route path='/Checkout' element={<Checkout/>} />
            <Route path='/signup' element={<Register/>} />
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/Privacy' element={<Privacy/>}/>
            <Route path='/faq' element={<FAQPage/>}/>
            <Route path='/os' element={<Os/>}/>
            
        </Routes>
};
export default Routers;