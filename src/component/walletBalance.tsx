import React from "react";

interface Wallets {
title: string
amount: number
bonus: number
accountNumber: number
bankName: string
accountName: string
fundwallet: string
}
interface WalletBalanceProps {
  card: Wallets
}
const walletBalance: React.FC<WalletBalanceProps> = ({card}) =>{
const handleCopyClick = () =>{
  navigator.clipboard.writeText(card.accountNumber.toString())
  .then(() => alert(`Number copied to clipboard`))
  .catch((erorr) => console.error('Error copying to clipboard'))
}

  return(
   <div className="card">
   
   {card.title}
   {card.amount}
   {card.bonus}
   {card.accountNumber} 
   <button onClick={handleCopyClick}>
    copy
   </button>
   {card.bankName}
   {card.accountName}
   {card.fundwallet}
   </div> 
  )
}
export default walletBalance