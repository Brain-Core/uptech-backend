import { BrowserRouter as Router, Route } from 'react-router-dom';
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


function App() {
  return (
    <Router>
      <NavBar/>
      <div className="container1">
        <SideBar/>
        {/* team 's routes */}
        <Route exact path='/' component={Team}/>
        <Route exact path="/addteam" component={Addteam}/>
        <Route exact path="/editteam/:id" component={EditTem}/>
        {/* Product' s routes */}
        <Route exact path='/product' component={Product}/>
        <Route exact path='/editproduct/:id' component={EditProduct}/>
        <Route exact path='/addproduct' component={AddProduct}/>

        {/* partner's routes */}
        <Route exact path='/partner' component={Partner}/>

      </div>
    </Router>
  );
}

export default App;
