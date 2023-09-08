import React, { useState } from 'react';
import './form.css'
// Define the type for DISCO options
type DiscoOption = {
  value: string;
  label: string;
};

const ElectricityBill: React.FC = () => {
  const [discoType, setDiscoType] = useState<DiscoOption | null>(null);
  const [meterNumber, setMeterNumber] = useState<string>('');
  const [amount, setAmount] = useState<number | ''>('');

  const discoOptions: DiscoOption[] = [
    { value: 'disco1', label: 'DISCO 1' },
    { value: 'disco2', label: 'DISCO 2' },
    { value: 'disco3', label: 'DISCO 3' },
    // Add more DISCO options here
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform bill payment logic here (e.g., send form data to a backend server)

    // Reset form fields after submission
    setDiscoType(null);
    setMeterNumber('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label>
          DISCO Type:
          <select
            value={discoType?.value || ''}
            onChange={(e) => {
              const selectedDisco = discoOptions.find((option) => option.value === e.target.value);
              setDiscoType(selectedDisco || null);
            }}
          >
            <option value="">Select DISCO</option>
            {discoOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Meter Number:
          <input
            type="text"
            value={meterNumber}
            onChange={(e) => setMeterNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
      </div>
      <button type="submit">Pay Bill</button>
    </form>
  );
};

export default ElectricityBill;
