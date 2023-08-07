import React, { useState } from 'react';

// Define the type for Education Pin options
type EducationPinOption = {
  value: string;
  label: string;
};

const EducationPin: React.FC = () => {
  const [educationPin, setEducationPin] = useState<EducationPinOption | null>(null);
  const [quantity, setQuantity] = useState<number | ''>(1);
  const [amount, setAmount] = useState<number | ''>(0);

  const educationPinOptions: EducationPinOption[] = [
    { value: 'waec', label: 'WAEC' },
    { value: 'neco', label: 'NECO' },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform purchase logic here (e.g., send form data to a backend server)

    // Reset form fields after submission
    setEducationPin(null);
    setQuantity(1);
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Education Pin:
          <select
            value={educationPin?.value || ''}
            onChange={(e) => {
              const selectedPin = educationPinOptions.find((option) => option.value === e.target.value);
              setEducationPin(selectedPin || null);
            }}
          >
            <option value="">Select Education Pin</option>
            {educationPinOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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
      <button type="submit">Purchase</button>
    </form>
  );
};

export default EducationPin;
