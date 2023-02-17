import React from 'react'
import AirBnbCard from './AirBnbCard'
import './AllAirBnbContainer.css'
import PropTypes from 'prop-types';

export default function AllAirBnbContainer({ rentals, addToCart }) {
    const allRentals = rentals.map((rental, index) => {
        return <AirBnbCard key={index} rental={rental} addToCart={addToCart} />
    })
    return (
        <div className='all-rentals'>
            <h2>All Rentals</h2>
            <div className='rental-container'>

                {allRentals}
            </div>
        </div>
    )
}

AllAirBnbContainer.propTypes = {
    rentals: PropTypes.arrayOf(
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
    addToCart: PropTypes.func.isRequired
}
