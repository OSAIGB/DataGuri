import React, { useState } from 'react';

interface AccountFormData {
  fullName: string;
  username: string;
  phoneNumber: string;
  accountLevel: string;
  transactionLimit: number;
  sendServicePurchaseEmails: boolean;
  sendWalletFundingEmail: boolean;
  useWhatsappBot: boolean;
  useTelegramBot: boolean;
}

const Account: React.FC = () => {
  const [formData, setFormData] = useState<AccountFormData>({
    fullName: '',
    username: '',
    phoneNumber: '',
    accountLevel: '',
    transactionLimit: 0,
    sendServicePurchaseEmails: false,
    sendWalletFundingEmail: false,
    useWhatsappBot: false,
    useTelegramBot: false,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic to save the form data
    console.log(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (event.target as HTMLInputElement).checked : value,
    }));
  };
  

  return (
    <div>
      <h1>Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Account Level:
            <select name="accountLevel" value={formData.accountLevel} onChange={handleChange} required>
              <option value="">Select Account Level</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="VIP">VIP</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Transaction Limit:
            <input
              type="number"
              name="transactionLimit"
              value={formData.transactionLimit}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Send Service Purchase Emails:
            <input
              type="checkbox"
              name="sendServicePurchaseEmails"
              checked={formData.sendServicePurchaseEmails}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Send Wallet Funding Email:
            <input
              type="checkbox"
              name="sendWalletFundingEmail"
              checked={formData.sendWalletFundingEmail}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Use WhatsApp Bot:
            <input type="checkbox" name="useWhatsappBot" checked={formData.useWhatsappBot} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Use Telegram Bot:
            <input type="checkbox" name="useTelegramBot" checked={formData.useTelegramBot} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Account;