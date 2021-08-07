
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import React, { useState, useEffect  } from 'react';
import '../App.css';



function Header({singleproductt, detailsshow, setDetailsshow}) {
  const [count, setCount] = useState(false);
  const [totalsome, setTotalsome] = useState();
  

 
	const showhiden = () => {
    var x = document.getElementById("sitemanu");
  if (x.style.display === "none") {
    x.style.display = "block";    
  } else {    
    x.style.display = "none";    
  }
}
 
const name = window.$name;

useEffect(()=>{

 var msgTotal = singleproductt && singleproductt.reduce(function(prev, cur) {
  return prev + cur.price;
}, 0);
  setTotalsome(msgTotal)
 console.log(msgTotal);
})
 

  return (
    
    <div className="header"> 
      <div id="fb-root" className=" fb_reset">
          <div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}>
            <div>
            </div>
          </div>
        </div>
        <div id="page">
          <div className="app catalog navOpen chaldal-theme" data-reactid=".s91vo0xg3o" data-react-checksum={361640821}>
            <div className="hide chat-section" data-reactid=".s91vo0xg3o.2.0">
              <button className="chatWindowCloseBtn border-radius-small" data-reactid=".s91vo0xg3o.2.0.0">
                <svg style={{fill: 'white', stroke: 'white', display: 'inline-block', verticalAlign: 'middle'}}>
                  <rect x="19.49" y="46.963" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 121.571 49.0636)" width="62.267" height="5.495" data-reactid=".s91vo0xg3o.2.0.0.0.0" />
                  <rect x="18.575" y="47.876" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 49.062 121.5686)" width="62.268" height="5.495" data-reactid=".s91vo0xg3o.2.0.0.0.1" />
                </svg>
              </button>
            </div>
            <div className="shoppingCartWrapper" data-reactid=".s91vo0xg3o.3">
            </div>
            <div className="headerWrapperWrapper" data-reactid=".s91vo0xg3o.4.0">
              <div data-reactid=".s91vo0xg3o.4.0.0">
                <div itemScope itemType className="top-header" data-reactid=".s91vo0xg3o.4.0.0.0">
                  <button onClick={()=>showhiden()} className="hamburgerMenu hidden-xs" data-reactid=".s91vo0xg3o.4.0.0.0.0">
                    <svg style={{fill: '#444444', stroke: '#444444', display: 'inline-block', verticalAlign: 'middle'}} width="25px" height="25px" version="1.1" viewBox="0 0 100 100" data-reactid=".s91vo0xg3o.4.0.0.0.0.0">
                      <path d="m12 20v8h76v-8zm0 26v8h76v-8zm0 26v8h76v-8z" data-reactid=".s91vo0xg3o.4.0.0.0.0.0.0" />
                    </svg>                    
                  </button>
                  <div className="logo hidden-xs" data-reactid=".s91vo0xg3o.4.0.0.0.1">
                    <a href data-reactid=".s91vo0xg3o.4.0.0.0.1.0">
                    <Link to="/">
                      <img className="egg chaldal_logo" style={{backgroundImage: 'url(https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+DataCenter-Release-2252/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=1)', backgroundRepeat: 'no-repeat'}} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-reactid=".s91vo0xg3o.4.0.0.0.1.0.0" />
                    </Link>
                    </a>
                  </div>
                  <form itemProp="potentialAction" itemScope itemType className="searchArea" data-reactid=".s91vo0xg3o.4.0.0.0.3">
                    <div className="searchInput" data-reactid=".s91vo0xg3o.4.0.0.0.3.0">
                      <meta itemProp="target" content data-reactid=".s91vo0xg3o.4.0.0.0.3.0.0" />
                      <input name="search_term_string" className="searchBox" type="text" placeholder="Search for products (e.g. eggs, milk, potato)" required />
                      <button type="submit" data-reactid=".s91vo0xg3o.4.0.0.0.3.0.2">
                        <svg className="search" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" data-reactid=".s91vo0xg3o.4.0.0.0.3.0.2.0">
                        </svg>
                      </button>
                    </div>
                  </form>
                <Link to="/selectcity">
                  <a href="#" className="citySelectionLink hidden-xs" data-reactid=".s91vo0xg3o.4.0.0.0.4">
                    <div className="area citySelectionArea" data-reactid=".s91vo0xg3o.4.0.0.0.4.0">
                      <span className="locationMarkerIcon" data-reactid=".s91vo0xg3o.4.0.0.0.4.0.0">
                        <svg style={{fill: '#615e58', stroke: '#615e58', display: 'inline-block', verticalAlign: 'middle'}} width="20px" height="25px" viewBox="0 0 22.254 29.006" data-reactid=".s91vo0xg3o.4.0.0.0.4.0.0.0">
                          <path fill="none" strokeWidth={2} d="M10.086 27.461C2.423 16.351 1 15.21 1 11.127a10.127 10.127 0 0120.254 0c0 4.083-1.423 5.223-9.086 16.334a1.266 1.266 0 01-2.082 0zm1.041-12.114a4.22 4.22 0 10-4.22-4.22 4.22 4.22 0 004.22 4.22z" data-reactid=".s91vo0xg3o.4.0.0.0.4.0.0.0.0">
                          </path>
                        </svg>
                      </span>
                        <p className="metropolitanAreaName" data-reactid=".s91vo0xg3o.4.0.0.0.4.0.1">Dhaka</p>
                      <p data-reactid=".s91vo0xg3o.4.0.0.0.4.0.2">
                        <i className="arrow-down" data-reactid=".s91vo0xg3o.4.0.0.0.4.0.2.0" />
                      </p>
                    </div>
                  </a>
                </Link>
                  <div className="helpArea area hidden-sm hidden-xs" data-reactid=".s91vo0xg3o.4.0.0.0.5">
                    <a href="#" data-reactid=".s91vo0xg3o.4.0.0.0.5.0">
                      <span className="questionIcon" data-reactid=".s91vo0xg3o.4.0.0.0.5.0.0">?</span>
                      <span className="en" data-reactid=".s91vo0xg3o.4.0.0.0.5.0.1">Help &amp; More</span>
                    </a>
                  </div>
                  <div className="localeSwitch area hidden-sm hidden-xs" data-reactid=".s91vo0xg3o.4.0.0.0.6">
                    <p className="selectedLocale" data-reactid=".s91vo0xg3o.4.0.0.0.6.0">EN&nbsp;</p>
                    <p className="divider" data-reactid=".s91vo0xg3o.4.0.0.0.6.1">|</p>
                    <p className data-reactid=".s91vo0xg3o.4.0.0.0.6.2">&nbsp;বাং</p>
                  </div>
                  <div className="loginArea authButtons area hidden-xs" data-reactid=".s91vo0xg3o.4.0.0.0.7">
                    <button className="signInBtn" data-reactid=".s91vo0xg3o.4.0.0.0.7.0" onClick={()=>setCount(!count)}>{name}</button>
                  </div>
                  <div className="mui" data-reactid=".s91vo0xg3o.4.0.0.0.8" />
                </div></div></div></div></div>
	

    <div className="bottomlivechate">
      <img src="./image/miniimg/livechat.JPG"/>
    </div>


    <div className="producttoggle">
      <div className="item">
        <img src="./image/miniimg/item.JPG"/>
        <div className="counitem">{singleproductt ? singleproductt.length : "0"} Item</div>
      </div>  
      
      <div className="pro_price">
        <div className="tot_price">{totalsome ? totalsome : "0"}&nbsp;Price</div>
      </div>
    </div>



{count ? 
    <div className="loginsystem">
      <div className="loginheader">Login
      <div className="logclone" onClick={()=>setCount(!count)}>X</div>
      </div>    

      <div className="facebook">Sign Up or Login with Facebook</div>
      <div className="email">Login with Email</div>

      <hr/>
      <div className="or">Or</div>

      <div className="plcenter">PLEASE ENTER YOUR MOBILE PHONE NUMBER</div>

      <div className="numberinput">
          <input type="text" className="phoneinput" value="+88"/>
          <br/>
          <div className="eg">e.g. +8801672955886</div>
      </div>

      <div className="logsubmit">Login with Email</div>


      <div className="logbootmnot">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>




    </div>
:""}

{detailsshow ?
<div className="product_details_toggle">
    <div className="productdetails_close" onClick={()=>setDetailsshow(!detailsshow)}>&times;</div>
    
    <div className="details_toggle_product">
      <span>Goalini Full Cream Milk Powder</span>
      <div style={{fontSize:'14px'}}>1 Kg</div>
    </div>


</div>
:""}


  </div>  

  );
}

export default Header;
