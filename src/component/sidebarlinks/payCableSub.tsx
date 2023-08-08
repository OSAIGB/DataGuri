import React, { useState } from 'react';

interface FormData {
  cableType: string;
  cablePlan: string;
  iucAmount: number;
}

const PayCableSub: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    cableType: '',
    cablePlan: '',
    iucAmount: 0,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    
    setFormData({
      cableType: '',
      cablePlan: '',
      iucAmount: 0,
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Cable Type:
          <input
            type="text"
            name="cableType"
            value={formData.cableType}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Cable Plan:
          <input
            type="text"
            name="cablePlan"
            value={formData.cablePlan}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          IUC Amount:
          <input
            type="number"
            name="iucAmount"
            value={formData.iucAmount}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit">Purchase</button>
    </form>
  );
};

export default PayCableSub;
