import React from 'react';
import classes from '../Profile/Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return (
        <div className={classes.content}>
            <img
                src="https://www.desktopbackground.org/download/800x600/2014/11/13/855442_800x600-wallpapers-images-tbwnz-com_800x600_h.jpg"
                alt="idea"
            />
            <div>avatar+description</div>
            <MyPosts />
        </div>
    );
};

export default Profile;
