import React from "react";
import "./wallet.css";
import logo from './moniepoint.png'

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
  const handleCopyClick = () => {
    navigator.clipboard.writeText(card.accountNumber.toString())
      .then(() => alert(`Number copied to clipboard`))
      .catch((error) => console.error('Error copying to clipboard'));
  };

  return (
    <div className="wallet-container">
      <div className="logo">
        <img src={card.chip} alt="Chip" className="chip" />
        <img src={card.bankLogo} alt="Bank Logo" className="bank-logo" />
      </div>
      <div className="wallet-item title">{card.title}</div>
      <div className="wallet-item amount">{card.amount}</div>
      <div className="wallet-item bonus">{card.bonus}</div>
      <div className="wallet-item accountnumber">{card.accountNumber}</div>
      <button onClick={handleCopyClick} className="wallet-item walletButtons">
        Copy
      </button>
      <div className="wallet-item bankname">{card.bankName}</div>
      <div className="wallet-item account">{card.accountName}</div>
      <div className="wallet-item fundwallet">{card.fundwallet}</div>
    </div>
  );
};

export default WalletBalance;





