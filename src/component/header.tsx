import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBell } from "@fortawesome/free-solid-svg-icons";
const Header : React.FC = () =>{
return(
    <div className="header">
 <header>
        <FontAwesomeIcon icon={faHome} />
        
        <h1>DataGuri</h1>
        <p>Hello User</p>
        <FontAwesomeIcon icon={faBell} />
      </header>
    </div>
)
}

export default Header