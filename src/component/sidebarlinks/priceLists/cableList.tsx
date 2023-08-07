import React from 'react';

const CablePriceList: React.FC = () => {
  return (
    <div>
      <h1>Cable Service Price List</h1>
      <h2>GOTV Price List</h2>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GOTV SMALLIE - MONTHLY</td>
            <td>1095.6</td>
          </tr>
          <tr>
            <td>GOTV JINJA</td>
            <td>2241</td>
          </tr>
          <tr>
            <td>GOTV JOLLI</td>
            <td>3286.8</td>
          </tr>
          <tr>
            <td>GOTV MAX</td>
            <td>4830.6</td>
          </tr>
          <tr>
            <td>GOTV SUPA</td>
            <td>6374.4</td>
          </tr>
          <tr>
            <td>GOTV SMALLIE - QUARTERLY</td>
            <td>2390.4</td>
          </tr>
        </tbody>
      </table>

      <h2>DSTV Price List</h2>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DSTV PADI</td>
            <td>2490</td>
          </tr>
          <tr>
            <td>DSTV YANGA</td>
            <td>3486</td>
          </tr>
          <tr>
            <td>DSTV CONFAM</td>
            <td>6175.2</td>
          </tr>
          <tr>
            <td>DSTV COMPACT</td>
            <td>10458</td>
          </tr>
          <tr>
            <td>DSTV COMPACT PLUS</td>
            <td>16533.6</td>
          </tr>
          <tr>
            <td>DSTV PREMIUM</td>
            <td>24402</td>
          </tr>
        </tbody>
      </table>

      <h2>Startimes Price List</h2>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NOVA - MONTHLY</td>
            <td>900.00</td>
          </tr>
          <tr>
            <td>BASIC - MONTHLY</td>
            <td>1850.00</td>
          </tr>
          <tr>
            <td>SMART - MONTHLY</td>
            <td>2600.00</td>
          </tr>
          <tr>
            <td>CLASSIC - MONTHLY</td>
            <td>2750.00</td>
          </tr>
          <tr>
            <td>SUPER - MONTHLY</td>
            <td>4900.00</td>
          </tr>
          <tr>
            <td>NOVA - WEEKLY</td>
            <td>300.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CablePriceList;
