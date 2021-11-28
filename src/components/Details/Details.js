import React, { useEffect, useState } from 'react';
import Artist from '../Artist/Artist';
import Cart from '../Cart/Cart';
import './Details.css'

const Details = () => {
    const [artists, setArtists] = useState([]);
    const [cart,setCart] = useState([]);
    const [name, setName]= useState([]);


    useEffect(() => {
        fetch('./datas.JSON')
            .then(res => res.json())
            .then(data => setArtists(data));
    }, [])

    const handleCartButton = artist =>{
            const newCart = [...cart, artist];
            setCart(newCart);
    }
    const handleName= (artist)=>{
        const newName= [...name,  artist.name ,<br/>];
        setName(newName);
    }

    return (
        
        <div>
            <div className="row">
                <div className="col-9 info-border">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 artist-container">

                        {
                             artists.map(artist => <Artist
                                                key={artist.name}
                                                handleCartButton ={handleCartButton}
                                                handleName={handleName}
                                                artist={artist}></Artist>)
                        }

                    </div>
                </div>
                <div className="col-3 cart-container">
                    <Cart cart={cart} name={name}></Cart>
                </div>
            </div>
        </div>
      
    );
};

export default Details;