import React, { useState } from 'react';
import bnbs from '../data/bnbs.json'
import AllAirBnbContainer from './AllAirBnbContainer';
import Cart from './Cart';
import './AirBnbApp.css';

export default function AirBnbApp() {
    const [selectedRentals, setSelectedRentals] = useState([])

    const addToCart = (selectedRental) => {
        setSelectedRentals([...selectedRentals, selectedRental])

    }
    const removeFromCart = (rental) => {
        const filteredArr = selectedRentals.filter((selectedRental) => {
            return rental.title !== selectedRental.title;
        })

        setSelectedRentals(filteredArr)
    }

    return (
        <div className='all-vacation-rentals'>
            <AllAirBnbContainer rentals={bnbs} addToCart={addToCart} />
            <Cart shoppingCartRentals={selectedRentals} removeFromCart={removeFromCart} />
        </div>
    )
}
