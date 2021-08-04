
import '../App.css';
import { Link} from "react-router-dom";

function Sitebar() {

 
	
 

  return (
    <> 
    <div className="sitebar">
	    <div className="sitebartop">
	    	<Link to="/offer"><div className="ptop">Offers&nbsp;<span>92</span></div></Link>
	      	<Link to="/foodaid"><div className="ptop">Food Aid</div></Link>
	    </div>
      	<div className="hr"></div>
      	
      	<div className="sitebartopto">

      	<Link to="/populer">
	      	<div className="sitelist">
		      	<img src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80219&q=low&v=1&m=40&webp=1&alpha=1" />
		      	Popular
	      	</div>
	    </Link>

	    <Link to="/hyginene">
	      	<div className="sitelist">
		      	<img src="https://chaldn.com/_mpimage/hygiene?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80229&q=low&v=1&m=40&webp=1&alpha=1" />
		      	Hyginene
		     </div>
		</Link>

	    <Link to="/babycare">
	      	<div className="sitelist">
	      		<img src="https://chaldn.com/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80247&q=low&v=1&m=40&webp=1&alpha=1" />
	      		Baby Care<span>></span>
	      	</div>
		</Link>

	    <Link to="/petcare">
	      	<div className="sitelist">
		      	<img src="https://chaldn.com/_mpimage/pet-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80246&q=low&v=1&m=40&webp=1&alpha=1" />
		      	Pet Care<span>></span>
			</div>
	    </Link>

	    <Link to="/food">
	      	<div className="sitelist">
				<img src="https://chaldn.com/_mpimage/food?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80241&q=low&v=1&m=40&webp=1&alpha=1" />	
		      	Food<span>></span>
			</div>
		</Link>

	    
	    <Link to="/homecleaning">
	      	<div className="sitelist">
	      		<img src="https://chaldn.com/_mpimage/home-cleaning?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80249&q=low&v=1&m=40&webp=1&alpha=1" />
	      		Home & Cleaning<span>></span>
			</div>
		</Link>

	    <Link to="/officeproducts">
	      	<div className="sitelist">
		      	<img src="https://chaldn.com/_mpimage/office-products?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80251&q=low&v=1&m=40&webp=1&alpha=1" />
		      	Office Products<span>></span>
			</div>
		</Link>

	    <Link to="/beautyhealth">
	      	<div className="sitelist">
	      		<img src="https://chaldn.com/_mpimage/beauty-health?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80254&q=low&v=1&m=40&webp=1&alpha=1" />
	      		Beauty & Health<span>></span>
			</div>
		</Link>

	    <Link to="/homeapplication">
	      	<div className="sitelist">
	      		<img src="https://chaldn.com/_mpimage/home-appliances?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80253&q=low&v=1&m=40&webp=1&alpha=1" />
	      		Home Application<span>></span>
	      	</div>
		</Link>

	    <Link to="/vehicleessentials">
	      	<div className="sitelist">
	      		<img src="https://chaldn.com/_mpimage/vehicle-essentials?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80252&q=low&v=1&m=40&webp=1&alpha=1" />
	      		Vehicle Essentials<span>></span>
			</div>
		</Link>
      	</div>


    </div>
	</>  
  );
}

export default Sitebar;
