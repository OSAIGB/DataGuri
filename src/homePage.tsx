// Import necessary modules and components
import React from "react";
import {useState} from 'react'
import Header from "./component/header";
import WalletBalance from "./component/walletBalance";
import SideBar from "./component/sidabar";
import { faBars,faCode, faWifi, faPhone, faTv,faBolt, faSchool, faIdCard, faWallet, faTag, faRefresh, faUser,
faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CatchDisplay from './component/catchDisplay'
import QuickAccess from "./component/quickAccess";
import Chat from "./component/chat";
import MoniePointLogo from './moniepoint.png'
import Chip from './chip.png'
import Sterling from './sterlingbank.png'
import Wema from './wema.svg'
import Map from './map.png'

import Transact from "./component/transactions";

// Define the prop type for the HomePage component
interface onLogout {
  onLogout: () => void;
}
interface transactionTypes {
  id: number
  date: number
  amount: number
  response: string
}


interface transactions {
  id: number
  date: number
  amount: number
  response: string
}
// Define the interface for the Wallet object
interface Wallet {
  title: string;
  amount: number;
  bonus: number;
  accountNumber: number;
  bankName: string;
  accountName: string;
  fundwallet: string
  bankLogo: string
  chip: string
}

// Define the HomePage component with the provided onLogout prop
const HomePage: React.FC<onLogout > = ({ onLogout }) => {
  // Define the data for wallet balances as an array of Wallet objects
  const walletBalance: Wallet[] = [
    {
      title: 'Wallet Balance',
      accountName: 'Guri',
      amount: 100,
      bonus: 0.00,
      accountNumber: 6272075831,
      bankName: 'MoniePoint MFB',
      fundwallet: 'Fund Wallet',
      bankLogo : 'MoniePoint',
      chip: Chip
    },
    {
      title: 'Wallet Balance',
      accountName: 'Guri',
      amount: 100,
      bonus: 0.00,
      accountNumber: 8984108498,
      bankName: 'Sterling bank',
      fundwallet: 'Fund Wallet',
      bankLogo : 'Sterling Bank',
      chip: Chip
    },
    {
      title: 'Wallet Balance',
      accountName: 'Guri',
      amount: 100,
      bonus: 0.00,
      accountNumber: 9178609233,
      bankName: 'Wema Bank',
      fundwallet: 'Fund Wallet',
      bankLogo : 'Wema Bank',
      chip: Chip
    },
  ];
  const transactionsList : transactionTypes[]= [
    {
      id: 234345323424e3,
      date: 23,
      amount: 432,
      response: 'success'
    },
    {
      id: 439850989808,
      date: 43,
      amount: 343,
      response: 'failed'
    }
  ]
 

  const backgroundImage = {
    backgroundImage: `url(${Map})`,
    backgroundSize: 'cover',
    filter: 'blur(10px)'
  }

  return (
    <div>
        <section className="homepage-view"> 
    
       <div className="home-display">
        
        <div className="wallet-items-container"  >
            {walletBalance.map((walletItem: Wallet, index: number) => (
              <div className={`wallet-item-row wallet-bg-${index}` } key={index} >
                <WalletBalance card={walletItem} />
              </div> 
            ))}
          </div>
        <div className="quick-access-wallet">
          <QuickAccess  />
          </div> 
          
       {/* Additional Content */}
       
        <div className="invite-div">
          <div className="earn"> 
          <h1>Invite and earn</h1>
          <p>You will earn N0 on the user's first deposit (capped at N100)</p>
          <p>Forward your referral code <span>c1dabb</span></p></div>

         <div className="forward-link">
          <p>Or forward link:</p> <p> <a href="#">https://app.dataguri.com.ng/register?referral=c1dabb</a></p></div> 
        </div> <div className="transactions">
   <Transact transactions={transactionsList}/>
   </div>
         </div> 
      </section>
     <Chat/>
    
    </div>
  );
};

export default HomePage;
