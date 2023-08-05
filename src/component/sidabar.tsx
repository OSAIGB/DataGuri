import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


interface sidBarTypes {
  bars: string
  icon: any
}
interface sideBarProps {
  sideBarIcon : sidBarTypes
}

const SideBar: React.FC<sideBarProps> = ({sideBarIcon}) =>{

  return(
    <div className="sideBar">
    <div>

     {sideBarIcon.bars}
     <FontAwesomeIcon icon={sideBarIcon.icon}/>
</div>
    </div>
  )
}
export default SideBar