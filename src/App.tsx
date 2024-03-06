import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://i1.wp.com/d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4866092.jpg"
          alt="logo"
        />
      </header>
      <nav className="nav">
        <div>
          <a> Profile </a>
        </div>
        <div>
          <a>Message</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <img
          src="https://www.desktopbackground.org/download/800x600/2014/11/13/855442_800x600-wallpapers-images-tbwnz-com_800x600_h.jpg"
          alt="idea"
        />
        <div>avatar+description</div>
        <div>
          My post
          <div>New post</div>
        </div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
