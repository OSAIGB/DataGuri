import React from 'react'
import HomePage from '../homePage'

interface transactionTypes {
  id: number
  date: number
  amount: number
  response: string
}
interface TransactionTypeProps {
transactions: transactionTypes}


const Transaction : React.FC<TransactionTypeProps> = ({transactions})=>{

  return(
    <div>
   {transactions.id}
   {transactions.date}
   {transactions.amount}
   {transactions.response}
    <div></div>
  </div>
  
);
};
export default Transaction
