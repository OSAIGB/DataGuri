import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
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
<Link to={sideBarIcon.links} target="_blank" rel="noopener noreferrer">
  {sideBarIcon.bars}
     <FontAwesomeIcon icon={sideBarIcon.icon}/>
     </Link>
</div>
    </div>
    
  )
}
export default SideBar