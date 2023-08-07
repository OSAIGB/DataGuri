import React from 'react';

const ElectricityPriceList: React.FC = () => {
  return (
    <div>
      <h1>Electricity Service Price List</h1>
      <h2>Electricity Price List</h2>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Electricity</td>
            <td>100.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ElectricityPriceList;
