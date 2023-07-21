import React,{useRef,useEffect} from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import './header.css';
import {motion} from 'framer-motion'
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
]
const Header=()=>{
    const HeaderRef =useRef(null)
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
    )
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
                            <span className="fav__icon"><i class="ri-heart-2-line"></i>
                            <span className="badge">1</span>
                            </span>
                            <span className="cart__icon"><i class="ri-shopping-bag-2-fill"></i>
                            <span className="badge">1</span></span>
                            <span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="usericon"/></span>
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
