import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
const PriceList: React.FC = () => {
interface Pricelist{
  list: string
  links: string
  id: number
}
const navigate = useNavigate()
const items: Pricelist[] = [
  { id: 1, list: 'Airtel', links: '/priceList/airtelPricelist' },
  { id: 2, list: 'Glo', links: '/priceList/glopricelist' },
  { id: 3, list: '9mobile', links: '/priceList/9mobilepricelist' },
  { id: 4, list: 'Cable', links: 'priceList/cablepricelist' },
  { id: 5, list: 'Education', links: 'priceList/educationpricelist' },
  { id: 6, list: 'Electricity', links: 'priceList/electricityprices' },
  { id: 7, list: 'Mtn', links: 'priceList/mtnprices' }
];

const handleClick = (link: string) => {
  navigate(link);
};

  return (
    <div>
      <h1>Price List</h1>
      <p>
        Dashboard ≫ Price List
      </p>
      
      <div className="horizontal-list">
      <ul>
        {items.map((item: Pricelist) => (
          <Link to={item.links} onClick={() =>{
            handleClick(item.links)
          }}><li key={item.id}>{item.list}</li></Link>
        ))}
      
      </ul>
      
    </div>
    <Outlet/>
    <h1>MTN Service Price List</h1>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MTN Airtime</td>
            <td>98.50</td>
          </tr>
          <tr>
            <td>MTN Data Epin</td>
            <td>98.50</td>
          </tr>
        </tbody>
      </table>

      <h1>MTN Gifting Data</h1>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MTN 1.5GB - 30 DAYS</td>
            <td>980</td>
          </tr>
          <tr>
            <td>MTN 2GB - 30 DAYS</td>
            <td>1176</td>
          </tr>
          <tr>
            <td>MTN 3GB - 30 DAYS</td>
            <td>1470</td>
          </tr>
          <tr>
            <td>MTN 4.5GB - 30 DAYS</td>
            <td>1960</td>
          </tr>
          <tr>
            <td>MTN 6GB - 30 DAYS</td>
            <td>2450</td>
          </tr>
          <tr>
            <td>MTN 10GB - 30 DAYS</td>
            <td>2940</td>
          </tr>
        </tbody>
      </table>

      <h1>MTN Corporate Data</h1>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MTN CORPORATE 500MB - 30 DAYS</td>
            <td>156.66</td>
          </tr>
          <tr>
            <td>MTN CORPORATE 1GB - 30 DAYS</td>
            <td>234.99</td>
          </tr>
          <tr>
            <td>MTN CORPORATE 2GB - 30 DAYS</td>
            <td>469.98</td>
          </tr>
          <tr>
            <td>MTN CORPORATE 3GB - 30 DAYS</td>
            <td>704.97</td>
          </tr>
          <tr>
            <td>MTN CORPORATE 5GB - 30 DAYS</td>
            <td>1174.95</td>
          </tr>
          <tr>
            <td>MTN CORPORATE 10GB - 30 DAYS</td>
            <td>2349.9</td>
          </tr>
        </tbody>
      </table>

      <h1>MTN SME Data</h1>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Customer Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MTN SME 500MB - 30 DAYS</td>
            <td>147.94</td>
          </tr>
          <tr>
            <td>MTN SME 1GB - 30 DAYS</td>
            <td>221.91</td>
          </tr>
          <tr>
            <td>MTN SME 2GB - 30 DAYS</td>
            <td>443.82</td>
          </tr>
          <tr>
            <td>MTN SME 3GB - 30 DAYS</td>
            <td>665.73</td>
          </tr>
          <tr>
            <td>MTN SME 5GB - 30 DAYS</td>
            <td>1109.55</td>
          </tr>
          <tr>
            <td>MTN SME 10GB - 30 DAYS</td>
            <td>2219.1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
    
    
  
};

export default PriceList; 
