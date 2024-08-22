import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png'
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [cart, updateCart] = useState([])

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo"/>
        <h1 className='lmj-title'>La maison Jungle</h1>
      </Banner>
      <Cart cart={cart} updateCart={updateCart}/>
      <ShoppingList/>
      <Footer/>
    </div>
  );
}

export default App;
