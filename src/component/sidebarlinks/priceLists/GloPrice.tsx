import React from 'react';

const GloPriceList: React.FC = () => {
  return (
    <div>
      <h1>Glo Service Price List</h1>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Glo Airtime</td>
            <td>97.00</td>
          </tr>
        </tbody>
      </table>

      <h1>Glo Corporate Data</h1>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GLO CORPORATE 500MB - 30 DAYS</td>
            <td>159.94</td>
          </tr>
          <tr>
            <td>GLO CORPORATE 1GB - 30 DAYS</td>
            <td>239.91</td>
          </tr>
          <tr>
            <td>GLO CORPORATE 2GB - 30 DAYS</td>
            <td>479.82</td>
          </tr>
          <tr>
            <td>GLO CORPORATE 3GB - 30 DAYS</td>
            <td>719.73</td>
          </tr>
          <tr>
            <td>GLO CORPORATE 5GB - 30 DAYS</td>
            <td>1199.55</td>
          </tr>
          <tr>
            <td>GLO CORPORATE 10GB - 30 DAYS</td>
            <td>2399.1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GloPriceList;