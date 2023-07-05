import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';
import Product from './Components/product/Product';
import ProductDetail from './Components/product-detail/ProductDetail';
import Cart from './Components/cart/Cart';

function App() {
  return (
    <div className="App">
<Navbar/>     
<Router>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Router>     
 <Footer/>    
    </div>
  );
}

 


export default App;
