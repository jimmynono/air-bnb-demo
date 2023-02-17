import React from 'react'
import AirBnbCard from './AirBnbCard'
import PropTypes from 'prop-types'

export default function Cart({ shoppingCartRentals, removeFromCart }) {
    let total = 0;

    const shoppingCartItems = shoppingCartRentals.map((rental, index) => {
        const price = rental.payment.cost;

        total += price;

        return <AirBnbCard key={index} rental={rental} removeFromCart={removeFromCart} isCartItem={true} />
    })
    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>The total rental price is : {total} </p>
            {shoppingCartItems}
        </div>
    )
}

Cart.propTypes = {
    shoppingCartRentals: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            location: PropTypes.shape({
                city: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired
            }),
            payment: PropTypes.shape({
                cost: PropTypes.number.isRequired
            })
        })
    ),
    removeFromCart: PropTypes.func.isRequired
}
