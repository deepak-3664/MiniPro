import React, { useState, useEffect } from "react";
import { Container,Row,Col,Form,FormGroup } from "reactstrap";
import Helmet from "../componenets/Helmet/Helmet";
import CommonSection from "../UI/CommoSection";
import '../styles/Checkout.css';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Checkout=()=>{

    // const totalQty=useSelector((state) => state.cart.cartItems)
    const totalAmount=useSelector((state) => state.cart.totalAmount)
    const totalQty = useSelector((state) => state.cart.totalQuantity);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalcode, setPostalcode] = useState('');
    const [country ,setCountry] = useState('');
    const [setamount] = useState('totalAmount');
    const navigate = useNavigate();
    const [details,setDetails] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = {
            name: name,
            email: email,
            number: number,
            address: address,
            city: city,
            postalcode: postalcode,
            country: country,
        }
        try {
            const response = await axios.post("http://127.0.0.1:8181/Checkout/addfed", data);

            setDetails(response.data);
            console.log(response);
        }
        catch (error) {
            console.log("error fetching data");
        }
    };

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
        name: "Multimart",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Deepak",
          email: "deepakprabu@gmail.com",
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
    navigate('/os');
  }



    
    return<Helmet title='Checkout'>
        <CommonSection  title='Checkout'/>
        <section>
            <Container>
                <Row>
                    <Col lg='8'>
                        <h6 className="mb-4 fw-bold">Billing Information</h6>
                        <Form className="billing__form">
                            <FormGroup className="form__group" onSubmit={handleSubmit}>
                                <input type="text" value={name} required onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name"/>
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="email"  value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email"/>
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="number" value={number} required onChange={(e) => setNumber(e.target.value)} placeholder="Enter Your Phone Number"/>
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="text"  value={address} required onChange={(e) => setAddress(e.target.value)} placeholder="Address"/>
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="text"  value={city} required onChange={(e) => setCity(e.target.value)} placeholder="City"/>
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="text" value={postalcode} required onChange={(e) => setPostalcode(e.target.value)} placeholder="Postal Code"/>
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="text" value={country} required onChange={(e) => setCountry(e.target.value)} placeholder="Country"/>
                            </FormGroup>
                            <button className="buy__btn w-100" onClick={handleSubmit} >Place An Order</button>
                        </Form>
                    </Col>
                    <Col lg="4">
                        <div className="checkout__cart">
                            <h6>Total Quantity : <span >{totalQty}</span></h6>
                            <h6>Sub Total : <span value={totalAmount} onChange={(e) => setamount(e.target.value)}>{totalAmount}</span></h6>
                            <h6>
                            Shipping :<span>FreeShipping</span>
                            
                            </h6>
                            <h4>Total Cost : <span>{totalAmount}</span></h4>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>

};

    