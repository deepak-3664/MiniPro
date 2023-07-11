import { Link } from 'react-router-dom';
import './Home.css';


const Home =()=>{
    return(
        <div className="home">
<div>
<ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/menu">MENU</a></li>
        <li><a href="/about">ABOUT US</a></li>
        <li><a href="/offers">DEALS</a></li>
        {/* <li><a href="/about">WISHLIST</a></li> */}
        <li style={{float: 'right'}}><a href="/signin">SIGN IN</a></li>
      </ul>
</div>
<img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689091109/StarShine_d_bet4s5.jpg" height="600" width="100%" style={{borderRadius:0}} />
<button className='ho1'><Link to="/shop"><b>View Home Appliance →</b></Link></button>
<h2 style={{textAlign:'left'}}>FEATURED HOME APPLIANCES</h2>
<div className="cards-wrapper">
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689089200/modern-curved-4k-ultrahd-tv_bemvnz.jpg" height="340" width="320" style={{borderRadius:0}} /> </div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689089626/washing-machine-buy-ifb-front-loader-washing-machines-online-india-40_i5n0jh.png" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689089935/medias_wjhvxh.png" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689089846/IMG_1986-300x300.x11993_btbvum.png" height="340" width="320"style={{borderRadius:0}} /></div>
</div>
<button className='ho1'><Link to="/shop"><b>View Kitchen Appliance →</b></Link></button>
<h2 style={{textAlign:'left'}}>FEATURED KITCHEN APPLIANCES</h2>
<div className="cards-wrapper">
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689090361/images_zl51dv.jpg" height="340" width="320" style={{borderRadius:0}} /> </div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689090448/05_ljugtp.webp" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689090557/images_hty1ii.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1689090725/OTG-Oven-WS-Thumbnail_re8zuo.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
</div>
</div>

)
};
export default Home;