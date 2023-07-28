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

                <Col lg="2">
                <div className="footer__quick-links">
                        <h4 className="quick__links-title">Useful Links</h4>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='/Shop'>Shop</Link>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='/Cart'>Cart</Link>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='/'>Login</Link>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='/feedback'>feedback</Link>
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