import React from 'react';
import './greet.css';
function Greet( { name, age, school, address }) {
console.log (name, 'name');
console.log (age, 'age');
console.log (school, 'school');
console.log (address, 'address');



   return (
    <div className="welcoming-card">
      <h1>Am  {name}</h1>
      <p> {age} years old </p>
      <p> A student at {school}</p>
      <p>I stay in {address} with my beloved parents</p>
     </div>
  );
}
export default Greet;
// This is a functional component that takes in props and displays a greeting message

