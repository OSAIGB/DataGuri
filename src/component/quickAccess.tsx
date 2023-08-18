import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faPercentage, faWallet } from "@fortawesome/free-solid-svg-icons";
import './quickAccess.css'
import Chat from "./chat";

interface transactionTypes {
  id: number
  date: number
  amount: number
  response: string
}

interface transactionsTypeP {
  transactions: transactionTypes[]
}

const QuickAccess: React.FC<transactionsTypeP> = ({ transactions }) => {
  return (
    <div className="access-container">
      {/* First Major Div */}
      <div className="amount-spent">
        <div className="amount-today">  <h3>
          Amount Spent Today:</h3>
        <h1 className="amount-span">
          ₦ 0.00
        </h1>
        <a href="#"><h2 className="fund-wallet">Fund Wallet</h2></a>
        </div>
      <div className="vertical-line"></div>  
      </div>

      {/* Second Major Div */}
      <div className="apps-bot">
        <div className="get-app">
           <h3>
          Get our application/Bots:
        </h3>
        <a href="#"><FontAwesomeIcon icon={faLaptop} /></a>
        
        </div>
       
      <div className="vertical-line"></div> 
      </div>

      {/* Third Major Div */}
      <div className="access">
        <div className="access-div">
          <h3>
            Quick Access
          </h3>
          <div className="quick-div">
            <div className="redeem-coupon">
              <FontAwesomeIcon icon={faPercentage}className="percentage" />
              <p>Redeem Coupon</p>
            </div>
            <div className="bonus-wallet">
              <FontAwesomeIcon icon={faWallet} className="bonus-wallet-icon" />
              <p>Bonus 2 Wallet</p>
            </div>
          </div>
        </div>
        
      <div className="vertical-line"></div> 
      </div>

      {/* Additional Content */}
      <div className="invite">
        <div className="invite-div">
          <h3>Invite and earn</h3>
          <p>You will earn N0 on the user's first deposit (capped at N100)</p>
          <p>Forward your referral code <span>c1dabb</span></p>
          <p>Or forward link:</p> <p> <a href="#">https://app.dataguri.com.ng/register?referral=c1dabb</a></p>
        </div>
      <div className="vertical-line"></div> 
      </div>

      {/* Transactions */}
      <div className="transactions">
        <h1>Transactions:</h1>
        {transactions.map((transaction: transactionTypes, index: number) => (
          <div key={index} className="transaction-div">
            <div className="id-date">  <h4 className="transaction-id">{transaction.id}</h4>
            <div className="transaction-date">Date: {transaction.date}</div>
            </div>
            <div className="amount-response">
                 <h4 className="transaction-amount"> ₦{transaction.amount}</h4>
            <div className="transaction-response"> {transaction.response}</div>
            </div>
          
        </div>
        ))}
          
      </div>
      
    </div>
  );
}

export default QuickAccess;
