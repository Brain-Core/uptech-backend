import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import SideBar from './components/sidebar/SideBar';
import './App.css';
import Team from './components/team/Team';
import Product from './components/product/Product';
import Partner from './components/partner/Partner';
import Addteam from './components/team/Addteam';
import EditTem from './components/team/EditTem';
import EditProduct from './components/product/EditProduct';
import AddProduct from './components/product/AddProduct';
import EditPartner from './components/partner/EditPartner';
import AddPartner from './components/partner/AddPartner';
import Impact from './components/impact/Impact';
import EditImpact from './components/impact/EditImpact';
import AddImpact from './components/impact/AddImpact';
import Login from './components/login/Login';
import PrivateRoute from './components/routes/PrivateRoute';
import Register from './components/register/Register';
import User from './components/user/User';


function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/login" component={Login}/> 
        <div className="container1">
          <SideBar/>
          {/* team 's routes */}
          <PrivateRoute exact path='/' component={Team}/>
          <PrivateRoute exact path="/addteam" component={Addteam}/>
          <PrivateRoute exact path="/editteam/:id" component={EditTem}/>
          {/* Product' s routes */}
          <PrivateRoute exact path='/product' component={Product}/>
          <PrivateRoute exact path='/editproduct/:id' component={EditProduct}/>
          <PrivateRoute exact path='/addproduct' component={AddProduct}/>

          {/* partner's routes */}
          <PrivateRoute exact path='/partner' component={Partner}/>
          <PrivateRoute exact path='/editpartner/:id' component={EditPartner}/>
          <PrivateRoute exact path='/addpartner' component={AddPartner}/>

          {/* impact's routes */}
          <PrivateRoute exact path='/impact' component={Impact}/>
          <PrivateRoute exact path='/addimpact' component={AddImpact}/>
          <PrivateRoute exact path='/editimpact/:id' component={EditImpact}/>

          {/* user informations  */}
          <PrivateRoute exact path='/register' component={Register}/>
          <PrivateRoute exact path='/user' component={User}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
