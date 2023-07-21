import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../Routers/Routes";
const Layout=()=>{
    return(
        <div>
             <Header/> 
            <div>
                <Routers/>
            </div>
            <Footer/>
        </div>
    )
};
export default Layout;