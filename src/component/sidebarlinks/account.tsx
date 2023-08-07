import React, {useState} from 'react'

const Account = () =>{
  const [network, setNetwork] = useState('');
  const [dataType, setDataType] = useState('');
  const [dataPlan, setDataPlan] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
    return (
      <form >
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
  
  )
}