import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BrowserRouter as Router,NavLink, Link, Route } from "react-router-dom";
import Account from "./sidebarlinks/account";

interface sidBarTypes {
  bars: string
  icon: any
  links: string
}
interface sideBarProps {
  sideBarIcon : sidBarTypes
}

const SideBar: React.FC<sideBarProps> = ({sideBarIcon}) =>{

  return(
    
   
    <div className="sideBar">
    <div>
<NavLink to={sideBarIcon.links} rel="noopener noreferrer">
  {sideBarIcon.bars}
     <FontAwesomeIcon icon={sideBarIcon.icon}/>
     </NavLink>
</div>
    </div>
    
  )
}
export default SideBar