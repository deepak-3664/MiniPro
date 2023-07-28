import React from "react";
import Helmet from "../componenets/Helmet/Helmet";
import CommonSection from "../UI/CommoSection";
import './os.css'
export const Os = () => {
    return(
        <Helmet title='Checkout'>
        <CommonSection  title='Order SuccessFull'/>
        <h1 className="os"><span><i class="ri-gift-2-fill"></i></span>ORDER SUCCESSFUll</h1>
        </Helmet>

    )
}