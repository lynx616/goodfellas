import React, { useState } from "react";
import Navbar from './Navbar';
import Secpage from './Secpage';
import Categories from './Categories';
import Trending from "./Trending";
import './index.css';

function App() {
  const [show, setshow] = useState(false);
  const [showw, setshoww] = useState(false);


  function dekhao(){
    setshow(!show);
    console.log("hocche");
  };
  function dekhaoo(){
    setshoww(!showw);
    console.log("hocche");
  };
  return (
    <>
    
        <Navbar trendfun={dekhaoo} catefun={dekhao}/>
        {show && <Categories/>}
        {showw && <Trending/>}
        
        
        <div className="card-box">
        <Secpage/>
        </div>
        
    </>
    
  );
}

export default App;




