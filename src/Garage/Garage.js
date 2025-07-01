import React from 'react';
import './Garage.css';

function Garage() {
    const cars = ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes'];
    
    return (
        <div className="garage-container">
            <h2>My Garage</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>{car}</li>
                ))}
            </ul>
        </div>
    );
}
export default Garage;
// This component displays a list of cars in a garage