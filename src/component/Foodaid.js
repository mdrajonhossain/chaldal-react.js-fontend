
import '../App.css';
import Header from './header';
import Sitebar from './sitebar';

function Foodaid() {

 
	


  return (
      <div className="">
		<Header/>
	<div className="bodytext">
		<div className="sitemanu" id="sitemanu" style={{marginTop:'4%'}}>
			<Sitebar/>
		</div>
	


	

		<div className="textbody" id="textbody" style={{marginTop:'4%'}}> 
			<div className="aidtop">
				<div className="aidtopleft">
					<img src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2254/Default/stores/chaldal/components/page/Donation/images/zimgo_logo.png?q=best&webp=1"/>
					<br/><span className="txt1">Donate your old phone <span className="txtred">to feed a family of 4</span></span>
					<br/>
					<div className="txt2">Donate your old, idle devices to turn into food for the underprivileged</div>
					<div className="dxtbutton">DONATE YOUR DEVICE NOW</div>
				</div>

				<div className="aidtopright">
					<img src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2254/Default/stores/chaldal/components/page/Donation/images/creative.png?q=best&webp=1" style={{height: '200px'}}/>
				</div>
			</div>



				<div className="aidcomverpic">
					<img src="./image/donation_1.webp" style={{width:'100%', height:'650px'}}/>


				<div className="aidcomvertext">
				<span className="welcome">Welcome To</span> <span className="foodaid">Food Aid</span>
				<br/><span className="aplatform">A platform to connect those with the means to give and those who are in need of help</span>
					
				<div className="welcombtn">					
					<div className="donet_btn">DONATE</div>
					<div className="reqfood_btn">REQUEST FOOD AID</div>
				</div>

					
				</div>

				</div>

				<div className="how_we_help">HOW WE HELP</div>

				<div className="by_building">
					By building and operating an accountable and sustainable distribution network to connect generous partners with hopeful beneficiaries.
				</div>


				<div className="accept_donet_3col">
					<div className="">
						<img src="./image/foodhand.JPG" style={{width:'140px', height:'100px'}}/>
					</div>					
					<div className="">
						<img src="./image/man.JPG" style={{width:'140px', height:'100px'}}/>
					</div>					
					<div className="">
						<img src="./image/pepole.JPG" style={{width:'140px', height:'100px'}}/>
					</div>
				</div>

				<div className="baby_comver_pic">			
					<img src="./image/kids.jpg" style={{height:'300px'}}/>
					
					<div className="baby_comver_text">

						Created to finance humanitarian relief operations during the pandemics, Food-Aid provides an efficient logistics solution to ensure that funds are used to provide proper nutrition to those in need of assistance during emergency situations.
						<br/><br/>
						We match donations to those requesting aid, maintain transparency with donors and beneficiaries, and audit all donations and requests coming in. We hope to serve families quickly and efficiently, and work diligently towards a hunger-free Bangladesh.
					</div>


					<div className="milion_box">
						<div className="milion">
							<span>9.5 million</span><br/>
							<p>children of pre-school age are stunted from malnutrition.</p>
						</div>

						<div className="milion">
							<span>21.8%</span><br/>
							<p>of the population live below the poverty line.</p>
						</div>

						<div className="milion">
							<span>40 million</span><br/>
							<p>Bangladeshis are food insecure..</p>
						</div>						
					</div>


					<div className="no_act_kindness">
						“No act of kindness, no matter how small, is ever wasted.”<br/>- Aesop
					</div>


					<div className="milion_box">
						<div className="milion">
							<span>৳3,120</span><br/>
							<p>feeds a family of 4 for an entire month.</p>
						</div>

						<div className="milion">
							<span>৳4,200</span><br/>
							<p>gives a person food for the whole year..</p>
						</div>

						<div className="milion">
							<span>৳1,260</span><br/>
							<p>feeds a hungry child for an entire month.</p>
						</div>						
					</div>


					<div className="mission_vission">
						<div className="mission">
							<img src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2254/Default/stores/chaldal/components/page/Donation/images/banner_1.png" style={{width:'100%', height:'300px'}}/>
						</div>
						<div className="vission">
							<img src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2254/Default/stores/chaldal/components/page/Donation/images/banner_2.png" style={{width:'100%',height:'300px'}}/>
						</div>
					</div>



					
				</div>





		</div> 
	
				




	</div>
</div> 
  );
}

export default Foodaid;
