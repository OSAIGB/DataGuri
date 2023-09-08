import React from 'react';
import { useState } from 'react';
import Header from '../component/header';
import { Link, Outlet, useLocation } from 'react-router-dom';
import SideBar from '../component/sidabar';
import { faHome,faBars, faWifi, faPhone, faTv, faBolt, faSchool, faIdCard, faWallet, faTag, faRefresh, faUser, faCode, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function layout() {
    const location = useLocation()
    interface sidBarTypes {
      bars: string
      icon: any
      links: string
    }
    const sidbarArrays: sidBarTypes[] = [
      {
        bars: 'Dashboard',
        icon: faHome,
        links: '/'
      },
      {
        bars: 'BuyData',
        icon: faWifi,
        links: '/buyData'
  
      },
      {
        bars: 'Buy Airtime',
        icon: faPhone,
        links: '/buyAirtime'
      },
      {
        bars: 'Pay Cable Sub',
        icon: faTv,
        links: '/buyCable'
      },
      {
        bars: 'Pay Electricity Bill',
        icon: faBolt,
        links: '/payElect'
      },
      {
        bars: 'Education Pin',
        icon: faSchool,
        links: '/educationPin'
      },
      {
        bars: 'Data E-Pin',
        icon: faIdCard,
        links: '/dataEpin'
      },
      {
        bars: 'Airtime E-Pin',
        icon: faIdCard,
        links: '/airtimeEpin'
      },
      {
        bars: 'Fund Wallet',
        icon: faWallet,
        links: '/fundWallet'
      },
      {
        bars: 'Price List',
        icon: faTag,
        links: '/priceList'
      },
      {
        bars: 'Transaction',
        icon: faRefresh,
        links: '/transaction'
      },
      {
        bars: 'Account',
        icon: faUser,
        links: '/account'
      },
      {
        bars: 'Developer API',
        icon: faCode,
        links: '/developerApi'
      },
      {
        bars: 'Logout',
        icon: faSignOutAlt,
        links: '/login'
      }
    ];
    

    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false)
const handlesidebar = () =>{
  setSidebarVisible(!sidebarVisible)
}

    return (
        <div>
             <div>
          {location.pathname !== '/login' && location.pathname !=='/signup' && (
            <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
              {sidbarArrays.map((card:sidBarTypes, index: number) =>(
                <SideBar sideBarIcon={card} key={index}/>
              ))}
            </div>
          )}
      <div className="naba">
      {location.pathname !== '/login' && location.pathname !=='/signup'  && <Header/>}
            
            </div>
            {location.pathname !== '/login' && location.pathname !=='/signup' &&
           <FontAwesomeIcon 
            icon={faBars}
            className={`homepage-bars ${sidebarVisible ? 'visible' : ''}`} 
            onClick={handlesidebar}/>}
            </div>
            <Outlet/>
        </div>
    );
}

// export default layout;
//     return (
//         <div>
//           <SideBar />
//             <div className="naba">
//                 {location.pathname !== '/login' && <Header/>}
              
//             </div>
//             <Outlet/>
//         </div>
//     );
// }

export default layout; 