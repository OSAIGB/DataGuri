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
import Transactions from "./component/transactions";
import Chat from "./component/chat";
import MoniePointLogo from './moniepoint.png'
import Chip from './chip.png'
import Sterling from './sterlingbank.png'
import Wema from './wema.svg'
import Map from './map.png'
import QuickLinks from "./quickLinks";
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
interface Transaction {
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
      bankLogo : MoniePointLogo,
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
      bankLogo : Sterling,
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
      bankLogo : Wema,
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
        <CatchDisplay />
        <div className="wallet-items-container"  >
            {walletBalance.map((walletItem: Wallet, index: number) => (
              <div className={`wallet-item-row wallet-bg-${index}` } key={index} >
                <WalletBalance card={walletItem} />
              </div> 
            ))}
          </div>
          <QuickAccess transactions={transactionsList} />
          
        </div> 
        
      </section>
     <Chat/>
     <div className="quick-links-container">
     <QuickLinks/> </div>
    </div>
  );
};

export default HomePage;
