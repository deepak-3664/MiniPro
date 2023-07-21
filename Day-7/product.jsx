import React, { useContext } from "react";
import { ShopContext } from "./shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ₹ {price}</p>
      </div>
      <center>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
      🛒{cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      </center>
    </div>
  );
};