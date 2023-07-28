import React,{useRef,useEffect} from "react";
import { Link,useNavigate} from "react-router-dom";
import { Container, Row } from "reactstrap";
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import './header.css';
import {motion} from 'framer-motion'
import { useSelector } from "react-redux";
const nav__link = [
    {
        path:'home',
        display:'Home'
    },
    {
        path:'shop',
        display:'Shop'
    },
    {
        path:'cart',
        display:'Cart'
    },
    {
        path:'',
        display:'Login'
    },
  
]
const Header=()=>{
    const HeaderRef =useRef(null);
    const totalQuantity =useSelector(state=> state.cart.totalQuantity);
    const navigate =useNavigate()
    const stickyHeaderFunc =()=> {
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop>80||document.documentElement.scrollTop>80){
                HeaderRef.current.classList.add('sticky__header')
            }else{
                HeaderRef.current.classList.remove('sticky__header')
            }
        })
    }
    useEffect(()=>{
        stickyHeaderFunc();
        return()=>window.removeEventListener("scroll",stickyHeaderFunc);
    }
    );
    const navigateToCart=()=>{
        navigate("/cart");
    }

    return <header className="header" ref={HeaderRef}>
            <Container>
                <Row>
                    <div className="nav_wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo"/>
                            <div>
                                <h1>Multimart</h1>
                                {/* <p>Since 1995</p> */}
                            </div>
                        </div >
                        <div className="navigation">
                            <ul className="menu">
                                {
                                    nav__link.map((item,index)=>(
                                        <li className="nav__item" key={index}>
                                    <Link to={item.path} className={(NavClass)=>NavClass.isActive ? 'nav__active' : ''}>{item.display}</Link>
                                    </li>
                                    ))
                                }
                            </ul>
                        </div> 
                        <div className="nav__icons">

                            <span className="cart__icon" onClick={navigateToCart}><i class="ri-shopping-bag-2-fill"></i>
                            <span className="badge">{totalQuantity}</span></span>
                            <div className="mobile__menu">
                            <span ><i class="ri-menu-fill"></i></span>
                        </div> 
                        </div>
                        
                    </div>
                </Row>
            </Container>
        </header>
    
    
};
export default Header;
