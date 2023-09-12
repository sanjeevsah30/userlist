import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

import { AiOutlineUnorderedList } from "react-icons/ai";
import { TbAlignBoxLeftMiddleFilled } from "react-icons/tb";
import Form1 from "./Form1";

const Sidebar = ({setToggle}) => {
    const[openform,setopenForm]=useState(false)
  return (
    <>
    {
      openform?<>
      <div className="sidebar">
      <Form1 setopenForm={setopenForm}/>
      </div>
      </>:<>
         <div className="sidebar">
    <div className="read-card">
        <FaRegUserCircle className='user-icon' />
        <div className='reader-card'>
          <p className="hi">hi Reader</p>
          <p className="here">here is your news</p>
        </div>
      </div>

      <div className='toggle'>
        <p>view toggle</p>
        <div className="icons">
        <AiOutlineUnorderedList className="icon1" onClick={()=>setToggle(true)}/>
        <TbAlignBoxLeftMiddleFilled  className="icon2" onClick={()=>setToggle(false)} />
        </div>
       
      </div>

      <div className="feedback">
        <p>Have Feedback?</p>
        <button onClick={()=>setopenForm(true)}>We are listening</button>
      </div>
    </div></>  
    }

 
      
    </>
  );
};

export default Sidebar;
