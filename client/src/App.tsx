import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Product from "./components/product/Product";
import AddProduct from "./components/product/AddProduct";
function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <div className="container">
          <Route exact path='/' component={Product}/>
          <Route exact path='/newProduct' component={AddProduct}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
