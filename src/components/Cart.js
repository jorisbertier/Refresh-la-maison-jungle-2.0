import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils'
import '../styles/Cart.css'
import { useState } from 'react'

function Cart() {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)
    // const [open, isOpen] = useState(false)

    function handleCart() {
        updateCart(cart + 1)
    }
    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <div>
                Monstera : {monsteraPrice}€
                <button onClick={handleCart}>
                    Ajouter
                </button>
            </div>
            <h3>Total : {monsteraPrice * cart}€</h3>
        </div>
    )
}

export default Cart