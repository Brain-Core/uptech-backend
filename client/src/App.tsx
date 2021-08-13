import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Product from "./components/product/Product";
import AddProduct from "./components/product/AddProduct";
import EditProduct from "./components/product/EditProduct";
import Partner from "./components/partener/Partner";
import AddPartner from "./components/partener/AddPartner";
import EditPartner from "./components/partener/EditPartner";
function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <div className="container">
          <Route exact path='/' component={Product}/>
          <Route exact path='/newProduct' component={AddProduct}/>
          <Route exact path="/edit/:id" component={EditProduct}/>
          <Route exact path="/partner" component={Partner}/>
          <Route exact path="/newpartner" component={AddPartner}/>
          <Route exact path="/editpartner/:id" component={EditPartner}/>

        </div>
      </div>
    </Router>
  );
}

export default App;
