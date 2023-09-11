import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faPercentage, faWallet } from "@fortawesome/free-solid-svg-icons";
import './quickAccess.css'
import Chat from "./chat";
import '../App.css'


const QuickAccess: React.FC= () => {
  return (
    <div className="access-container">
      <div className="wallet-balance">
        <h2>Wallet Balance:</h2>
        <h3>#453</h3>
      </div>
      <div className="amount-spent">
        <div className="amount-today">  <h2>
          Amount Spent Today:</h2>
        <h3 className="amount-span">
          ₦ 0.00
        </h3>
        </div>
      <div className="vertical-line"></div>  
      </div>

      <a href="#" className="fund-wallet">Fund Wallet</a>
    </div>
  );
}

export default QuickAccess;
