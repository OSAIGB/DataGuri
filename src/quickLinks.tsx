import React from 'react'
import { faWifi, faPhone, faTv, faSchool } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './quickLinks.css'
import { Link } from 'react-router-dom'
const QuickLinks : React.FC = () =>{

interface BottomLinks  {
    icon: any,
    text: string,
    link: string
}

const BottomLinks: BottomLinks[] = [
 {
        text: 'Data',
        icon: faWifi,
        link: '/buyData'
  
      },
      {
        text: 'Airtime',
        icon: faPhone,
        link: '/buyAirtime'
      },
      {
        text: 'Cable',
        icon: faTv,
        link: '/buyCable'
      },
      {
        text: 'Education',
        icon: faSchool,
        link: '/educationPin'
      },
]

return(
   <div className='bottom-link-container' >
  {BottomLinks.map((linksTo, index) =>(
 <div key={index}>
 <Link to={linksTo.link} className='bottom-link' > 
   <FontAwesomeIcon icon={linksTo.icon} />
   <p>{linksTo.text}</p>
 </Link>
</div>
 
   
  ) )}
    </div>
)

}

export default QuickLinks