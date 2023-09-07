import {Routes,Route,BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Desktopnav from './Components/Navbar/Desktopnav';
import Mobilenav from './Components/Navbar/Mobilenav';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <>
     <BrowserRouter>
     <Desktopnav/>
     <Mobilenav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
       
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
     
  );
}

export default App;
