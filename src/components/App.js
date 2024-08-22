import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png'
import Footer from "./Footer";
import { useEffect, useState } from "react";

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart): [])

  useEffect(()=> {
    localStorage.setItem("cart", JSON.stringify(cart))
  },[cart])

  console.log(cart)
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo"/>
        <h1 className='lmj-title'>La maison Jungle</h1>
      </Banner>
      <Cart cart={cart} updateCart={updateCart}/>
      <ShoppingList cart={cart} updateCart={updateCart}/>
      <Footer/>
    </div>
  );
}

export default App;
