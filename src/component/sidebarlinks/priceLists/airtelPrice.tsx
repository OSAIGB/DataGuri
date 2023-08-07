import React from 'react';

const AirtelPriceList: React.FC = () => {
  return (
    <div>
      <h1>Price List</h1>
      <p>
        Dashboard ≫ Price List
      </p>
      <h1>Airtel Service Price List</h1>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Airtel Airtime</td>
            <td>98.75</td>
          </tr>
        </tbody>
      </table>

      <h1>Airtel Corporate Data</h1>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AIRTEL CORPORATE 500MB - 30 DAYS</td>
            <td>154.6</td>
          </tr>
          <tr>
            <td>AIRTEL CORPORATE 1GB - 30 DAYS</td>
            <td>231.9</td>
          </tr>
          <tr>
            <td>AIRTEL CORPORATE 2GB - 30 DAYS</td>
            <td>463.8</td>
          </tr>
          <tr>
            <td>AIRTEL CORPORATE 5GB - 30 DAYS</td>
            <td>1159.5</td>
          </tr>
          <tr>
            <td>AIRTEL CORPORATE 10GB - 30 DAYS</td>
            <td>2319</td>
          </tr>
          <tr>
            <td>AIRTEL CORPORATE 15GB - 30 DAYS</td>
            <td>3478.5</td>
          </tr>
          <tr>
            <td>AIRTEL CORPORATE 20GB - 30 DAYS</td>
            <td>4638</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AirtelPriceList;
