import React, { useState } from "react";

import '../styles/cart.css';
import Helmet from '../componenets/Helmet/Helmet';
import CommonSection from '../UI/CommoSection';
import { Container,Row,Col } from "reactstrap";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cartActions } from "../Redux/slices/CartSlice";
import { useSelector,useDispatch } from "react-redux";



const Cart=()=>{
    const cartItems= useSelector(state=>state.cart.cartItems);
    const totalAmount=useSelector(state=>state.cart.totalAmount);
    const [setamount] = useState('totalAmount');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(totalAmount === ""){
        alert("please enter amount");
        }else{
          var options = {
            key: "rzp_test_2eq4Udmfc2UNLD",
            key_secret:"vxN0uRQPC113ZVi8BjjNWjec",
            amount: totalAmount *100,
            currency:"INR",
            name:"D-06 Appliance",
            description:"for testing purpose",
            handler: function(response){
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name:"DEEPAK",
              email:"deepakprabu1234@gmail.com",
              contact:"8754988838"
            },
            notes:{
              address:"Sri krishna college of Enginnering and Technology"
            },
            theme: {
              color:"#3399cc"
            }
          };
          var pay = new window.Razorpay(options);
          pay.open();
        }
      }
    return(
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart"/>
                <section>
                    <Container>
                        <Row>
                            <Col lg='9'>
                                {
                                    cartItems.length==0? (<h2 className="fs-4 text-center">No Items added to cart</h2>) :(
                                    <table className="table bordered">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map((item,index)=>(
                                               <Tr item={item } key={index}/>
                                            ))
                                        }
                                    </tbody>
                                </table>)
                                }
                                
                            </Col>
                            <Col lg='3'>
                                <div>
                                    <h6 >Subtotal
                                    </h6>
                                    <span className="fs-4 fw-bold" value={totalAmount} onChange={(e)=>setamount(e.target.value)}>{totalAmount}</span> 
                                </div>
                                <div>
                                    <button className="buy__btn"><Link to='/shop'>Continue shopping</Link></button>
                                    <button className="buy__btn" onClick={handleSubmit}>Checkout</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
        </Helmet>

    )
};
const Tr =({item})=>{
    const dispatch= useDispatch()
    const deleteProduct =()=>{
        dispatch(cartActions.deleteItem(item.id))
    }
   return (<tr>
   <td><img src={item.imgUrl} alt=""></img></td>
   <td>{item.productName}</td>
   <td>{item.price}</td>
   <td>{item.quantity}px</td>
   <td>
       <motion.i whileTap={{scale:1.2}} onClick={deleteProduct} class="ri-delete-bin-line"></motion.i>
   </td>
</tr>)
}
export default Cart;