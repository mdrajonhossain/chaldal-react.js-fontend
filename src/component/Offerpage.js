
import '../App.css';
import Header from './header';
import Sitebar from './sitebar';

function City() {

 
	const addtobag = ()=> {
		alert("asdfasfd");
	}




  return (
      <div className="">
		<Header/>
	<div className="bodytext">
		<div className="sitemanu" id="sitemanu" style={{marginTop:'4%'}}>
			<Sitebar/>
		</div>
	




		<div className="textbody" id="textbody" style={{marginTop:'4%'}}> 

			<div className="category_filter_title">Filter By Category</div>

			<div className="category_tap_multi">
				<div className="category_tap">
					Popular(24)
					<img src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80219&q=low&v=1&m=40&webp=1&alpha=1" />
				</div>
				
				<div className="category_tap">
					Hyginene(25)
					<img src="https://chaldn.com/_mpimage/hygiene?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80229&q=low&v=1&m=40&webp=1&alpha=1" />
				</div>
				
				<div className="category_tap">
					Baby Care(26)
					<img src="https://chaldn.com/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80247&q=low&v=1&m=40&webp=1&alpha=1" />
				</div>
				
				<div className="category_tap">
					Pet Care(27)
					<img src="https://chaldn.com/_mpimage/pet-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80246&q=low&v=1&m=40&webp=1&alpha=1" />
				</div>
				
				<div className="category_tap">
					Food(28)
					<img src="https://chaldn.com/_mpimage/food?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80241&q=low&v=1&m=40&webp=1&alpha=1" />
				</div>
				
				<div className="category_tap">
					Home & Cleaning(29)
					<img src="https://chaldn.com/_mpimage/home-cleaning?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80249&q=low&v=1&m=40&webp=1&alpha=1" />
				</div>
			</div>
			<hr style={{width:'95%'}}/>

			<div className="special_offer_title">Special Offers</div>







			<div className="special_offer_product">
				<div className="offer_product_img">
					<img src="./image/mango-aamropali-net-weight-50-gm-3-kg.webp"/>
				</div>


				<div className="offer_product">
					<div className="addcard_border_shadow">Add to Shopping Bag</div>
					<div className="details" onClick={()=>addtobag()}>Details></div>
					<img src="./image/minimango.webp"/>
					<div className="kg50">Mango Aamrapali + 50kg</div>
					<div className="kg">3Kg</div>
					<div className="price">৳ 550/- </div><br/><br/>
					<div className="add_to_bag" onClick={()=>addtobag()}>Add to Bag</div>
				</div>
			</div>

			

			<div className="ss" style={{height:'500px'}}>asdfasdfxe</div>















		</div> 
	




	</div>
</div> 
  );
}

export default City;
