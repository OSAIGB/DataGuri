import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faPercentage, faWallet } from "@fortawesome/free-solid-svg-icons";
import './quickAccess.css'

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
        <h3>
          Amount Spent Today:</h3>
        <h1 className="amount-span">
          ₦ 0.00
        </h1>
      </div>

      {/* Second Major Div */}
      <div className="apps-bot">
        <h3>
          Get our application/Bots:
        </h3>
        <a href="#"><FontAwesomeIcon icon={faLaptop} /></a>
      </div>

      {/* Third Major Div */}
      <div className="access">
        <div className="access-div">
          <h3>
            Quick Access
          </h3>
          <div className="quick-div">
            <div>
              <FontAwesomeIcon icon={faPercentage} />
              <p>Redeem Coupon</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faWallet} />
              <p>Bonus 2 Wallet</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="invite">
        <div className="invite-div">
          <h3>Invite and earn</h3>
          <p>You will earn N0 on the user's first deposit (capped at N100)</p>
          <p>Forward your referral code <span>c1dabb</span></p>
          <p>Or forward link:</p> <p> <a href="#">https://app.dataguri.com.ng/register?referral=c1dabb</a></p>
        </div>
      </div>

      {/* Transactions */}
      <div className="transactions">
        {transactions.map((transaction: transactionTypes, index: number) => (
          <div key={index}>
            <div className="transaction-id">ID: {transaction.id}</div>
            <div className="transaction-date">Date: {transaction.date}</div>
            <div className="transaction-amount">Amount: {transaction.amount}</div>
            <div className="transaction-response">Response: {transaction.response}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickAccess;
