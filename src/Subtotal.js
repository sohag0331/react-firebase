import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

function Subtotal() {
    const [{ basket}, dispatch] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat

                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} item): <strong>{` ${value}`}</strong>
                        </p>
                        <small classname="subtotal__gift">
                            <input type="checkbox" /> This order contains
                        </small>
                        </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thoussandSeparator={true}
                prefix={"$"}


            />
            <button>Proceed to Checkout</button>

            
        </div>
    )
}

export default Subtotal
