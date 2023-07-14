import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../../product";
import "./shop.css";

export const Shop = () => {
  return (
    <div>
  <div className="sidebar"><center>
  <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669218444/banner_n6mzgs.png" style={{width: '100px'}} />
  <h1 className="dee">Catagories</h1>
  <a href="#label1">Kitchen Appliance</a>
</center></div>

    
<div className="contents">
    <div className="shop">
      <div className="shopTitle">
        <h1>Online Appliance Booking System</h1>
      </div>
      <b><label id="label1">Refregirators</label></b><br/><br/>
      <b><label id="label2">Samsung Brand</label></b>
      <div className="products">
      
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};
