import '../styles/Cart.css'
import { useState } from 'react'

function Cart() {
    const monsteraPrice = 8
    let [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    function handleCart() {
        updateCart(cart + 1)
    }

    return isOpen ? (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <div>
                Monstera : {monsteraPrice}€
                <button onClick={handleCart}>
                    Ajouter
                </button>
            </div>
            <h3>Total : {monsteraPrice * cart}€</h3>
            <button onClick={() => updateCart(0)}>Vider le Panier</button>
            <button onClick={() => setIsOpen(false)}>Fermer le Panier</button>
        </div>
    ) :
    (
        <div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
        </div>
    )
}

export default Cart