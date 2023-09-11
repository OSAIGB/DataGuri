import React from "react";
import "./wallet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

interface Wallets {
  title: string;
  amount: number;
  bonus: number;
  accountNumber: number;
  bankName: string;
  accountName: string;
  fundwallet: string;
  bankLogo: string
  chip: string
}

interface WalletBalanceProps {
  card: Wallets;
}

const WalletBalance: React.FC<WalletBalanceProps> = ({ card }) => {
  const handleCopyClick: () =>  void = () => {
    navigator.clipboard.writeText(card.accountNumber.toString())
      .then(() => toast.success(`Number copied to clipboard`))
      .catch((error) => console.error('Error copying to clipboard'));
  };

 
  return (
    <div className="wallet-container" >
    
      <div className="logo">

        <h1 className="bank-logo">{card.bankLogo}</h1>
      </div>
      <div className="details">
      </div>
      <div className="background-image"></div>
      <div className="wallet-item accountnumber">{card.accountNumber}
      <FontAwesomeIcon icon={faCopy}  className="copy" onClick={handleCopyClick}/></div>
      <div className="name-bonus">
      <div className="wallet-item account">
        <div className="accountName"><p>Account Name:</p><p>{card.accountName}</p></div></div>
         <div className="wallet-item bonus"> <p>Bonus Balance:</p>
      </div>
      </div>
     
      {/* <div className="wallet-item fundwallet">{card.fundwallet}</div> */}
    </div>
    
  );
};

export default WalletBalance;





