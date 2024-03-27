import React from 'react';
import classes from '../Header/Header.module.css';
const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src="https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-02-1024.png"
                alt="logo"
            />
        </header>
    );
};
export default Header;
