import React from 'react';
import classes from '../Navbar/Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <a> Profile </a>
            </div>
            <div className={classes.item}>
                <a>Message</a>
            </div>
            <div>
                <a className={classes.item}>News</a>
            </div>
            <div>
                <a className={classes.item}>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
};
export default Navbar;
