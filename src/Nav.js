import React,{useEffect, useState} from 'react'
import "./Nav.css"

function Nav() {

    const [show, handleShow] = useState(false);

  
   
    
    return (
        <div className = {`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
                alt="Netflix Logo"
            />

            
        </div>
    )
}

export default Nav
