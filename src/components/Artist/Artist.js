import './Artist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import React from 'react';


const Artist = (props) => {
    
    const { img, name, band, role, age, salary, country } = props.artist;
    const element = < FontAwesomeIcon icon={faShoppingCart} />
    
    
    

    return (
       
        <div>
            <div className="col">
                <div className="card artist-detail">
                    <img src={img} className="card-img-top img-design" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title title-design">Name : {name}</h5>
                        <p className="card-text">Band : {band}</p>
                        <p className="card-text">Role : {role}</p>
                        <p className="card-text">Age : {age}</p>
                        <p className="card-text">Country : {country}</p>
                        <p className="card-text">Salary : ${salary}</p>
                        <button 
                        onClick={()=>{props.handleCartButton(props.artist); props.handleName(props.artist)}}
                       
                        type="button" className="btn btn-design cart-btn">{element} Add to Cart</button>
                        
                        
                    </div>
                </div>
            </div>

        </div>
        

            );
};

            export default Artist;
