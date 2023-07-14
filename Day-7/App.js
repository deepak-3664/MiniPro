import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./shop-context";
import Home from "./Home";
import Signup from "./pages/login/Signup";
import Login from "./pages/login/login";
import { Privacy } from "./Privacy";
import AboutUs from "./Aboutus";
import FAQPage from "./Faq";
import { Payment } from "./PaymentPage";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/checkout" element={<Payment />} />



          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
