import React,{useState} from "react";
import CommonSection from "../UI/CommoSection";
import Helmet from "../componenets/Helmet/Helmet";
import { Container,Row,Col } from "reactstrap";
import "../styles/shop.css";
import products from '../assets/data/products';
import ProductList from "../UI/ProductList";
const Shop=()=>{
    const [productsData,setProductsData]=useState(products)
    const handlefilter =e=>{
        const filterValue =e.target.value;
        if(filterValue=='oven'){
            const filteredProducts =products.filter(item=>item.category=='oven')
            setProductsData(filteredProducts);

        }
        if(filterValue=='waterPurifier'){
            const filteredProducts =products.filter(item=>item.category=='waterPurifier')
            setProductsData(filteredProducts);

        }
        if(filterValue=='watch'){
            const filteredProducts =products.filter(item=>item.category=='watch')
            setProductsData(filteredProducts);

        }
        if(filterValue=='kettle'){
            const filteredProducts =products.filter(item=>item.category=='kettle')
            setProductsData(filteredProducts);

        }
        if(filterValue=='HandMixer'){
            const filteredProducts =products.filter(item=>item.category=='HandMixer')
            setProductsData(filteredProducts);

        }
        if(filterValue=='dishwasher'){
            const filteredProducts =products.filter(item=>item.category=='dishwasher')
            setProductsData(filteredProducts);

        }
    };

    const handleSearch =e=>{
        const searchTerm =e.target.value
        const searchedProducts = products.filter(item=> item.productName.
            toLowerCase().includes(searchTerm.toLowerCase()))
        setProductsData(searchedProducts)
    }

    return <Helmet title='Shop'>
        <CommonSection title='Products'/>
        

        <section>
            <Container>
                <Row>
                    <Col lg='3' md='3'>
                        <div className="filter__widget">
                            <select onChange={handlefilter}>
                                <option>Filter By Category</option>
                                <option value="oven">Oven</option>
                                <option value="waterPurifier">Water Purifier</option>
                                <option value="HandMixer">Hand Mixer</option>
                                <option value="dishwasher">Dishwasher</option>
                                <option value="kettle">Kettle</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='3' md='3'>
                    <div className="filter__widget">
                            <select>
                                <option>Sort By</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="search__box">
                            <input type="text" placeholder="Search...." onChange={handleSearch}/>
                            <span>
                                <i class="ri-search-line"></i>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="pt-0">
            <Container>
                <Row>
                    {
                        productsData.length == 0? <h1 className="text-center fs-4">No produts are found!</h1>
                        : <ProductList data={productsData}/>
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
};
export default Shop;