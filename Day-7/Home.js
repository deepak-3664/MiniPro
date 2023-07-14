import { Link } from 'react-router-dom';
import './Home.css';
import './footer.css';


const Home =()=>{
    return(
        <div className="home">
<img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689156191/major-appliances-herobanner_uwyvaj_a7dk0y.jpg" height="700" width="100%" style={{borderRadius:0}} />
<button className='ho1'><Link to="/shop"><b>View Kitchen Appliance →</b></Link></button>
<h2 style={{textAlign:'left'}}>FEATURED KITCHEN APPLIANCES</h2>
<div className="cards-wrapper">
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689135260/1_jpu3hy.png" height="400" width="320" style={{borderRadius:0}} /> </div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689135370/3_mqi2kb.png" height="200" width="320" style={{borderRadius:0}} /><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689135277/2_bnp77j.png" height="200" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689090557/images_hty1ii.jpg" height="400" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689090725/OTG-Oven-WS-Thumbnail_re8zuo.jpg" height="400" width="320" style={{borderRadius:0}} /></div>
</div>
<footer className="footer">
        <div className="background">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="/AboutUs">ABOUT US</a></li>
                <li><a href="/Privacy">PRIVACY POLICY</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/checkout">PAYMENT OPTIONS</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links" textAlign="right">
                <a href="https://www.facebook.com/profile.php?id=100088095992292"><i className="fab fa-facebook-f" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136043/1_xriwsb.jpg' width={40} height={40}style={{borderRadius:50}}></img></a>
                <a href="https://twitter.com/OMG__burgers"><i className="fab fa-twitter" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136581/7_m5zlyz.jpg' width={40} height={40} style={{borderRadius:50}}></img></a>
                <a href="https://www.linkedin.com/in/omg-burgers-939437257/"><i className="fab fa-linkedin-in" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136599/5_tf2hye.png' width={40} height={40} style={{borderRadius:50}}></img></a>
              </div>
            </div>
            
          </div><br/><br/>
          <br/><br/>
          <div className="footer-col">
          <h4>Kitchen Appliance</h4>
          <p className='p'>Refrigerator | Microwave Oven | Dish Washer | Hand Mixer | Mixer Grinder | Pressure Cooker | Kettle </p>
          </div>
          <br/><br/>
          <br/><br/>
          <div className="footer-col">
          <p className='p'>Copyright © 2023 Kitchen Appliances. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
</div>


)
};
export default Home;