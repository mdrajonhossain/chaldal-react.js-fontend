
import '../App.css';
import Header from './header';
import Sitebar from './sitebar';

function City() {

 
	


  return (
      <div className="">
		<Header/>



	<div className="bodytext">

		<div className="sitemanu" id="sitemanu" style={{marginTop:'4%'}}>
			<Sitebar/>
		</div>
	

		<div className="textbody" id="textbody" style={{marginTop:'4%'}}> 
				<div className="selectcity">Select City</div>


				<div className="citytab">
					<div className="Dhaka">
						<img src="./image/dhaka.webp" style={{height: '180px'}}/><br/>
						<div className="d">Dhaka</div>
					</div>

					<div className="Chattogram">
						<img src="./image/chattogram.webp" style={{height: '180px'}}/>
						<div className="d">Chattogram</div>
					</div>

					<div className="Jessore">
						<img src="./image/jashore.webp" style={{height: '180px'}}/>
						<div className="d">Jessore</div>
					</div>

				</div>


		</div>	


	</div>
</div> 
  );
}

export default City;
