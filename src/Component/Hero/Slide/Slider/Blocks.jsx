import React from 'react'

    import './sli.css'




export default function Blocks({ icon, text ,color}) {
    return (
      
      <div className="block-card" >
      <div className="icon-circle" >
        <i className={`fas fa-${icon}  `} style={{color:'#fff'}}></i>
      </div>
      <h4 >{text}</h4>
      <p >
        Lorem ipsum dolor sit amet consectetur.
      </p>

    </div>
    );
  }


