import React from 'react'

function Navbar() {
  return (
    <><div className="whole">
    <video className="vid-nav" src="video1.mkv" loop muted playsInline autoPlay/>
    <div className="navbar">
        <img role='button' src="logo1.png" alt="Logo"/>
        <ul className="navul">
         <li><a href="default.asp">Home</a></li>
         <li><a href="news.asp">Categories</a></li>
         <li><a href="contact.asp">Top Anime</a></li>
         <li><a href="about.asp">About</a></li>
         <li><a href="about.asp">Trendings</a></li>
        </ul>
        <div className="search-bar">      
        <input type="text" placeholder="Search.."/>
        <button type="submit">search</button>
        </div> 
        
    </div>
    <div className="dth-txt">
    <h1>DEATH NOTE</h1>
    <p>The story follows Light Yagami, a genius high school student who discovers a mysterious notebook: the "Death Note".</p>
    <button>Show more</button>
    </div>
    </div>
    </>
    
  );
}

export default Navbar;
