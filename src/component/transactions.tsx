import React from 'react'
import './transactions.css'
interface transactionTypes {
  id: number
  date: number
  amount: number
  response: string
}
interface TransactionTypeProps {
transactions: transactionTypes[]}


const Transact : React.FC<TransactionTypeProps> = ({transactions})=>{

  return(
    <div>
 
      {/* Transactions */}
      <div className="transaction">
        <h1 className='transaction-head'>Transactions:</h1>
        
        <table className="custom-table">
  <thead>
    <tr>
      <th>Date</th>
      <th>ID</th>
      <th>Amount</th>
      <th>Response</th>
    </tr>
  </thead>
  <tbody>
    {transactions.map((transaction: transactionTypes, index: number) => (
      <tr key={index}>
        <td>{transaction.date}</td>
        <td>{transaction.id}</td>
        <td>₦{transaction.amount}</td>
        <td>{transaction.response}</td>
      </tr>
    ))}
  </tbody>
</table>
          
        </div>
        
          
      </div>

);
};
export default Transact
