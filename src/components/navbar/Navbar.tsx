import React from 'react';
import './navbar.scss'

interface NavbarProps {
    
}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="logo" />
                <span>admin</span>
            </div>
            <div className="icons">
                <img src="./search.svg" alt="" className="icon" />
                <img src="./app.svg" alt="" className="icon" />
                <img src="./expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="./notifications.svg" alt="notifications" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://placehold.co/400" alt="" />
                    <span>Lorem</span>
                </div>
                <img src="./settings.svg" alt="" className="icon" />
            </div>
        </div>
    );
};

export default Navbar;