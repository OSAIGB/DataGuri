import React, {useState} from 'react'
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../sidabar';
import './form.css'
interface networksTypes {
  value: string
  label : string
}

const BuyData: React.FC = () =>{
  const [network, setNetwork] = useState<string>('');
  const [dataType, setDataType] = useState<string>('');
  const [dataPlan, setDataPlan] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [amount, setAmount] = useState('');


const networks : networksTypes[] =[
  {value: 'MTN', label: 'MTN'},
  {value: 'GLO', label: 'GLO'},
  {value: 'AIRTEL', label: 'AIRTEL'},
  {value: '9MOBILE', label: '9MOBILE'}
]

  return (
    <div>
    <form className='form'>
      <div>
        <label>
          Network:
          <select>
            <option value="">Select Network</option>
            {
              networks.map((providers) =>(<option key={providers.value} value={providers.value}>{providers.label}</option>))
            }
          </select>
        </label>
      </div>
      <div>
        <label>
          Data Type:
          <input
            type="text"
            value={dataType}
            onChange={(e) => setDataType(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Data Plan:
          <input
            type="text"
            value={dataPlan}
            onChange={(e) => setDataPlan(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Purchase</button>
    </form>
    </div>
  );
}

export default BuyData