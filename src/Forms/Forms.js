import React from 'react';
import './Forms.css';

function Forms() {
    return(
        <div className="forms-container">
            <h2>Welcome to Julian's form Page</h2>
            <form>
                <label htmlFor="name">fistName:</label>
                <input type="text" id="name" name="name" required /> <br/> <br/>
               
                <label htmlFor="name">lastName:</label>
                <input type="text" id="name" name="name" required /> <br/> <br/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required /> <br/> <br/>

                <label htmlFor="message">Message:</label>
                <input type="message" id="message" name="message" required/> <br/> <br/>

              </form>
        </div>
    )
}
export default Forms;