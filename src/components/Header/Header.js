import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Philosophy is the highest music!!</h1>
            <p>The wise musicians are those who play what they can master</p>
            <h2>Total Budget : 50 Million</h2>
            <div class="nav">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
        </div>
    );
};

export default Header;