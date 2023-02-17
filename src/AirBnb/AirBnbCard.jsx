import React from 'react'
import './AirBnbCard.css';
import PropTypes from 'prop-types';

export default function AirBnbCard({ rental, addToCart, removeFromCart, isCartItem }) {
    const { title, image, location, payment, } = rental


    const displayButton = () => {
        if (isCartItem) {
            return <button onClick={() => removeFromCart(rental)}>Remove Me!</button>
        }

        return <button onClick={() => addToCart(rental)}>Rent Me!</button>
    }

    return (
        <div className='rental-card'>
            <h2>{title}</h2>
            <div className='img-container' style={{ backgroundImage: `url(${image})` }}>

            </div>
            <div>
                <p>{location.city}, {location.country}</p>
                <p>{`Rental Price: ${payment.cost}`}</p>
                {displayButton()}
            </div>

        </div>
    )
}

AirBnbCard.propTypes = {
    rental: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        location: PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired
        }),
        payment: PropTypes.shape({
            cost: PropTypes.number.isRequired
        })
    }),
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func,
    isCartItem: PropTypes.bool
}






