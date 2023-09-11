import React from 'react';

const DashboardTransactions: React.FC = () => {
  return (
    <div>
      <h1>Transactions</h1>
      <p>
        Dashboard ≫ Transactions
      </p>
      <p>
        Airtime Data Cable Electricity Education Airtime E-Pin Data E-Pin Wallet Transaction Calculator
      </p>
      <h2>Airtime Transaction History</h2>
      <ul>
        <li>Excel</li>
        <li>PDF</li>
      </ul>
      <p>Show</p>
      <p>10</p>
      <p>entries</p>
      <p>Search:</p>
      <table>
        <thead>
          <tr>
            <th>Reference</th>
            <th>Product</th>
            <th>Recipient</th>
            <th>Transaction Type</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Amount Charged</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No matching records found</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Reference</th>
            <th>Product</th>
            <th>Recipient</th>
            <th>Transaction Type</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Amount Charged</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No matching records found</td>
          </tr>
        </tbody>
      </table>
      <p>Showing 0 to 0 of 0 entries (filtered from 139 total entries)</p>
    </div>
  );
};

export default DashboardTransactions;
