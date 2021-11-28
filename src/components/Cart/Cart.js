import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
    
const Cart = (props) => {
    const {cart} = props;
    const {name}= props;
    const element = < FontAwesomeIcon icon={faUser} />

    let total = 0;
   
    for(const artist of cart){
        total = total + artist.salary;
       
    }
    return (
        <div className="cart-part">
            <h2 className="cart-title">Cart Information </h2>
            
            <h4>{element} Players Added : {props.cart.length}</h4>
                <h4>Players Names : {name}
                </h4>

                <p>Total Cost : ${total}</p>
        </div>
    );
};

export default Cart;