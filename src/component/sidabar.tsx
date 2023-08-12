import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BrowserRouter as Router,NavLink, Link, Route } from "react-router-dom";
import Account from "./sidebarlinks/account";
import './sidebar.css'
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
    <div className="sidebar-links">
<NavLink to={sideBarIcon.links} rel="noopener noreferrer">
 <div className='icons-bars'> 
 <div>{sideBarIcon.bars}</div>
     <FontAwesomeIcon icon={sideBarIcon.icon}/>
</div>     </NavLink>
     </div>
</div>
    
    
  )
}
export default SideBar