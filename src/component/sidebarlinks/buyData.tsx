import React, {useState} from 'react'

const BuyData: React.FC = () =>{
  const [network, setNetwork] = useState<string>('');
  const [dataType, setDataType] = useState<string>('');
  const [dataPlan, setDataPlan] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [amount, setAmount] = useState('');
  return (
    <form>
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
  );
}

export default BuyData