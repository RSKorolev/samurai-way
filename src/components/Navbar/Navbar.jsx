import classes from '../Navbar/Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <a href="/profile">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="/dialogs">Message</a>
            </div>
            <div>
                <a href="/news">News</a>
            </div>
            <div>
                <a className={classes.item} href="/music">
                    Music
                </a>
            </div>
            <div className={classes.item}>
                <a className={classes.item} href="/settings">
                    Settings
                </a>
            </div>
        </nav>
    );
};
export default Navbar;
