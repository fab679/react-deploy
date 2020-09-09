import React from 'react';
import Navbar from './Navbar';
import "./header.css"
import Content from './Content';

const Header = () => {
    return (
        <div className="image">
            <Navbar />
            <Content ></Content>
        </div>
    );
}

export default Header;
