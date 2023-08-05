// Import necessary modules and components
import React from "react";
import Header from "./component/header";
import WalletBalance from "./component/walletBalance";
import SideBar from "./component/sidabar";
import { faHome,faCode, faWifi, faPhone, faTv,faBolt, faSchool, faIdCard, faWallet, faTag, faRefresh, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CatchDisplay from './component/catchDisplay'
import QuickAccess from "./component/quickAccess";
// Define the prop type for the HomePage component
interface onLogout {
  onLogout: () => void;
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
}
interface sidBarTypes {
  bars: string
  icon: any
}

// Define the HomePage component with the provided onLogout prop
const HomePage: React.FC<onLogout> = ({ onLogout }) => {
  // Define the data for wallet balances as an array of Wallet objects
  const walletBalance: Wallet[] = [
    {
      title: 'wallet Balance',
      accountName: 'Guri',
      amount: 100,
      bonus: 0.00,
      accountNumber: 6272075831,
      bankName: 'MoniePoint MFB',
      fundwallet: 'Fund Wallet'
    },
    {
      title: 'wallet Balance',
      accountName: 'Guri',
      amount: 100,
      bonus: 0.00,
      accountNumber: 8984108498,
      bankName: 'Sterling bank',
      fundwallet: 'Fund Wallet'
    },
    {
      title: 'wallet Balance',
      accountName: 'Guri',
      amount: 100,
      bonus: 0.00,
      accountNumber: 9178609233,
      bankName: 'Wema Bank',
      fundwallet: 'Fund Wallet'
    },
  ];

 
  const sidbarArrays: sidBarTypes[] = [
    {
      bars: 'Dashboard',
      icon: faHome
    },
    {
      bars: 'BuyData',
      icon: faWifi
    },
    {
      bars: 'Buy Airtime',
      icon: faPhone
    },
    {
      bars: 'Pay Cable Sub',
      icon: faTv
    },
    {
      bars: 'Pay Electricity Bill',
      icon: faBolt
    },
    {
      bars: 'Education Pin',
      icon: faSchool
    },
    {
      bars: 'Data E-Pin',
      icon: faIdCard
    },
    {
      bars: 'Airtime E-Pin',
      icon: faIdCard
    },
    {
      bars: 'Fund Wallet',
      icon: faWallet
    },
    {
      bars: 'Price List',
      icon: faTag
    },
    {
      bars: 'Transaction',
      icon: faRefresh
    },
    {
      bars: 'Account',
      icon: faUser
    },
    {
      bars: 'Developer API',
      icon: faCode
    }
  ];
  return (
    <div>
       <Header /> 
      
    
        <section>
      <CatchDisplay />
 <div>
        {sidbarArrays.map((card:sidBarTypes, index: number) =>(
      <SideBar sideBarIcon={card} key={index}/>
    ))}
       </div>
        {/* Map over the walletBalance array and render each item using the WalletBalance component */}
        {walletBalance.map((walletItem: Wallet, index: number) => (
          <WalletBalance key={index} card={walletItem} />
        ))}
        <QuickAccess />
      </section>

      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};

export default HomePage;
