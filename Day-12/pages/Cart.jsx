import React, { useState } from "react";
import CommonSection from "../UI/CommoSection";
import Helmet from "../componenets/Helmet/Helmet";
import "../styles/cart.css"
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../Redux/slices/CartSlice";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [setamount] = useState('totalAmount');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (totalAmount === "") {
      alert("please enter amount");
    } else {
      var options = {
        key: "rzp_test_0YI6y1BKg3OqGN",
        key_secret: "vpFaaS1e27tYekNst9dLIe63",
        amount: totalAmount * 100,
        currency: "INR",
        name: "D-06 Appliance",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Dinesh",
          email: "dinesh1234@gmail.com",
          contact: "9025317201"
        },
        notes: {
          address: "Sri krishna college of Enginnering and Technology"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
    navigate('/checkout');
  }
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <>
                  <h5 className="mb-5">Summary of your order</h5>
                  <table className="table table-borderless mb-5 align-middle">
                    <tbody>
                      {cartItems.map((item) => (
                        <Tr item={item} key={item.id} />
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              <div className="mt-4">
                <h6>
                  Subtotal: ₹
                  <span className="cart__subtotal" value={totalAmount} onChange={(e) => setamount(e.target.value)}>{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/appliance">Continue Shopping</Link>
                  </button>
                  <button className="addTOCart__btn" onClick={handleSubmit}>
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, imgUrl, productName, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={imgUrl} alt="" />
      </td>
      <td className="text-center">{productName}</td>
      <td className="text-center">₹{price}</td>
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
