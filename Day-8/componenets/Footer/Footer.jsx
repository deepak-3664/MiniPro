import React from "react";
import './footer.css';
import logo from '../../assets/images/eco-logo.png';
import { Container,Row,Col,ListGroup,ListGroupItem } from "reactstrap";
import {Link} from 'react-router-dom';

const Footer=()=>{

const year = new Date().getFullYear()
    return(
     <footer className="footer">
          <Container>
            <Row>
                <Col lg="4">
                <div className="logo">
                            
                            <div>
                                <h1 className="text-white">Multimart</h1>
                            </div>
                            </div>
                            <p className="footer_text mt-4">
                                gnhgjn
                            </p>  
                </Col>

                <Col lg="3">
                <div className="footer__quick-links">
                        <h4 className="quick__links-title">Top Categories</h4>
                        <ListGroup className="mb-3">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Mobile Phones</Link>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0" >
                                <Link to='#'>Modern Sofa</Link>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Arm Chair</Link>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Smart Watches</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg="2">
                <div className="footer__quick-links">
                        <h4 className="quick__links-title">Useful Links</h4>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='/shop'>Shop</Link>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='/cart'>Cart</Link>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='/login'>Login</Link>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Privacy policy</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
               
                <Col lg="3 ">
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title">Contact</h4>
                        <ListGroup className="footer__contact">
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i class="ri-map-pin-line"></i></span>
                                <p>123,xinderBazar, sylhet ,Banglagesh</p>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i class="ri-phone-line"></i></span>
                                <p>+90000001234</p>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i class="ri-mail-line"></i></span>
                                <p>Mul@gmail.com</p>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col> 

               

                <Col lg="12">
                    <p className="footer copyright">Copyright {year} developed by multimart.All rights Reserved.</p>
                </Col>
            </Row>
          </Container>
</footer>
    );
};

export default Footer;