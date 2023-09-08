import React, {useState} from 'react'
import './form.css'

const BuyAirtime: React.FC = ()  =>{
  const [network, setNetwork] = useState<string>('');
const [phoneNumber, setPhoneNumber] = useState<string>('');
const [amount, setAmount] = useState<string>('');

  return (
    <form className='form'>
      <div>
        <label>
          Network:
          <input
            type="text"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
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
  );
};

export default BuyAirtime