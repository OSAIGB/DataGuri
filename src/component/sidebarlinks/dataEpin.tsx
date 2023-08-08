import React, { useState } from 'react';

const DataEpin: React.FC = () => {
  const [network, setNetwork] = useState<string>('MTN');
  const [plan, setPlan] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<number | ''>(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform purchase logic here (e.g., send form data to a backend server)

    // Reset form fields after submission
    setPlan('');
    setName('');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Network:
          <select
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
          >
            <option value="MTN">MTN</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Plan:
          <input
            type="text"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </label>
      </div>
      <button type="submit">Purchase</button>
    </form>
  );
};

export default DataEpin;
