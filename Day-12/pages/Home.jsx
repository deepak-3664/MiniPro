import React, {useState,useEffect} from "react";
import Helmet from "../componenets/Helmet/Helmet";
import {Container,Row,Col} from "reactstrap";
import heroImg from'../assets/images/hero-img.png';
import "../styles/home.css";
import products from '../assets/data/products'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/services";
import ProductList from "../UI/ProductList";
import counterImg from '../assets/images/counter-timer-img.png'
import { Clock } from "../UI/Clock";
const Home=()=>{
    const [treandingProducts, setTreandingProducts]=useState([]);
    const [bestSalesProducts, setBestSalesProducts]=useState([]);
    const [mobileProducts, setMobileProducts]=useState([]);
    const [wirelessProducts, setWirelessProducts]=useState([]);
    const [popularProducts, setPopularProducts]=useState([]);
    const year=new Date().getFullYear();
    useEffect(()=>{
        const filteredTrendingProducts =products.filter(
            (item)=>item.category =="HandMixer"
        );
        const filteredBestSalesProducts =products.filter(
            (item)=>item.category =="oven"
        );
        const filteredMobileProducts =products.filter(
            (item)=>item.category =="waterPurifier"
        );
        const filteredWirelessProducts =products.filter(
            (item)=>item.category =="wireless"
        );
        const filteredPopularProducts =products.filter(
            (item)=>item.category =="watch"
        );
        setTreandingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
        setPopularProducts(filteredPopularProducts);
    },[]);
    return<Helmet title={'Home'}>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <p className="hero__subtitle">Trending product in {year}</p>
                            <h2>Make your Kitchen interior More Minimalistic & Modern</h2>
                            <p>In Multimart we provide you more number of Kitchen Appliances to make your kitchen modern.</p>
                            <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
                        </div>
                    </Col>
                    <Col lg='6'md='6'>
                        <div className="hero__img">
                            <img src={heroImg}alt="heroImg"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Services/>
        <section className="treanding__products">
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section__title">
                            Treanding Products
                        </h2>
                    </Col>
                    <ProductList data={treandingProducts}/>
                </Row>
            </Container>
        </section>
        <section className="best__slaes">
            <Container>
            <Row>
                <Col lg='12' className="text-center">
                    <h2 className="section__title">
                        Best Sales
                    </h2>
                </Col>
                <ProductList data={bestSalesProducts}/>
            </Row>
            </Container>
        </section>
        <section className="timer__count">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="clock__top-content">
                            <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                            <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
                        </div>
                        <Clock/>
                        <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn"><Link to='/shop'>Visit Store</Link></motion.button>
                    </Col>
                    <Col lg='6' md='6' className="text-end">
                        <img src={counterImg} alt=" "/>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="new__arrivals">
        <Container>
            <Row>
                <Col lg='12' className="text-center mb-5">
                    <h2 className="section__title">
                        New Arrivals
                    </h2>
                </Col>
                <ProductList data={mobileProducts}/>
                <ProductList data={wirelessProducts}/>
            </Row>
            </Container>
        </section>
        <section className="popular_category">
        <Container>
            <Row>
                <Col lg='12' className="text-center mb-5">
                    <h2 className="section__title">
                        Popular in Category
                    </h2>
                </Col>
                <ProductList data={popularProducts}/>
            </Row>
            </Container>
        </section>

    </Helmet>
};
export default Home;