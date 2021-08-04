
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './App.css';
import Home from './component/Home';
import Offerpage from './component/Offerpage';
import City from './component/City';
import Foodaid from './component/Foodaid';

import Populer from './component/Populer';
import Hyginene from './component/Hyginene';
import Babycare from './component/Babycare';
import Petcare from './component/Petcare';
import Food from './component/Food';
import Homecleaning from './component/Homecleaning';
import Officeproducts from './component/Officeproducts';
import Beautyhealth from './component/Beautyhealth';
import Homeapplication from './component/Homeapplication';
import Vehicleessentials from './component/Vehicleessentials';




function App() {

	
 

  return (
    <> 
    <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/offer" component={Offerpage}/>
          <Route path="/selectcity" component={City}/>
          <Route path="/foodaid" component={Foodaid}/>


          <Route path="/populer" component={Populer}/>
          <Route path="/hyginene" component={Hyginene}/>
          <Route path="/babycare" component={Babycare}/>
          <Route path="/petcare" component={Petcare}/>
          <Route path="/food" component={Food}/>
          <Route path="/homecleaning" component={Homecleaning}/>
          <Route path="/officeproducts" component={Officeproducts}/>
          <Route path="/beautyhealth" component={Beautyhealth}/>
          <Route path="/homeapplication" component={Homeapplication}/>
          <Route path="/vehicleessentials" component={Vehicleessentials}/>
    </Router>
	</>  
  );
}

export default App;
