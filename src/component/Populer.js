
import '../App.css';
import Header from './header';
import Sitebar from './sitebar';
import data from './Static_Object';
import React, { useState } from 'react';

function Populer() {
	const [detailsshow, setDetailsshow] = useState(false);
	const [singleproduct, setSingleproduct] = useState([]);

 
 const addcard = (e)=>{ 	
 	console.log(e+1);
 	setSingleproduct(e+1)
 }
	

  return (
      <div className="">
		
		<Header 
			singleproduct={singleproduct} 
			detailsshow={detailsshow} 
			setDetailsshow={setDetailsshow}
		/>

	<div className="bodytext">
		<div className="sitemanu" id="sitemanu" style={{marginTop:'4%'}}>
			<Sitebar/>
		</div>
	




		<div className="textbody" id="textbody" style={{marginTop:'4%'}}> 
			
			<div className="top_img">
				<img src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D79194&q=low&v=1&m=700&webp=1"/>
				<div className="popular_title">Popular</div>				
				<hr style={{width:'95%'}}/><br/><br/><br/>
			</div>



			<div className="popular_product_tap_grid">
				{
					data.map((propluerdata, index)=>{
						return (
						<div className="popular_product">
							<img src={propluerdata.imageurl}/>
							<div className="product_name">{propluerdata.productname}</div>
							<div className="popular_kg">1 Kg</div>
							<div className="popular_price">৳ {propluerdata.price}</div>
							<div className="popular_add_bag" onClick={()=>addcard(index)}>Add Soppping Bag</div>

							<div className="popular_add_soppping_bag">{propluerdata.name}</div>
							<div className="popular_details" onClick={()=>setDetailsshow(!detailsshow)}>Details ></div>
							<br/>
						</div>
						)
					})
				}
			</div>





		<div className="ss" style={{height:'100px'}}></div>
		</div> 
	




	</div>




</div> 
  );
}

export default Populer;
