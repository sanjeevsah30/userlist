import React, { useState } from "react";
import Cards from "./Cards";
import Sidebar from "./Sidebar";

const Home = () => {

    const[toggle,setToggle] =useState(true);
  return(
  <>
   <div  className='App'>
    <Sidebar setToggle={setToggle} />
    <Cards toggle={toggle} />
    </div>
  </>)
};

export default Home;
