import React from 'react'

function Navbar({catefun, trendfun}) {



  return (
    <><div className="whole">
    <video className="vid-nav" src="video1.mp4" loop muted playsInline autoPlay/>
    <div className="navbar">
        <img role='button' src="icon.png" alt="Logo"/>
        <ul className="navul">
         <li><a className='top' href="default.asp">Home</a></li>
         <li><a className='top' onClick={catefun} href="#">Categories</a></li>
         <li><a className='top' href="contact.asp">Top Anime</a></li>
         {/* <li><a className='top' href="about.asp">About</a></li> */}
         <li><a className='top' onClick={trendfun} href="#">Trendings</a></li>
        </ul>
        <div className="search-bar">      
        <input  type="text" placeholder="Type here.."/>
        <button type="submit">search</button>
        </div> 
        
    </div>
    <div className="dth-txt">
    <h1>ATTACK ON <span className='titan'>TITAN</span></h1>
    <p>When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls...</p>
    {/* btn1 */}
    
    <a><button><span class="main-text">Show more<span> <span>→</span> </span></span></button></a>
    </div>
    </div>
    
    </>
    
  );
}

export default Navbar;
