import React from 'react';

const EducationPriceList: React.FC = () => {
  return (
    <div>
      <h1>Education Service Price List</h1>
      <h2>WAEC Price List</h2>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>WAEC</td>
            <td>2844.9</td>
          </tr>
        </tbody>
      </table>

      <h2>NECO Price List</h2>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NECO</td>
            <td>860.04</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EducationPriceList;
