import React from 'react';

const FundWallet: React.FC = () => {
  return (
    <div>
      <h1>Fund Wallet</h1>
      <p>
        Deposit money into any of your unique bank Account below and your wallet will be credited automatically.
      </p>
      <p>
        The following funding fees apply:
      </p>
      <ul>
        <li>Deposit: ₦ 0.00 - ₦ 999.00; Fee charged: ₦40</li>
        <li>Deposit: ₦ 1,000.00 - ₦ 14,999.00; Fee charged: ₦50</li>
        <li>Deposit: ₦ 15,000.00 - ₦ 99,999.00; Fee charged: ₦80</li>
        <li>Deposit: ₦ 100,000.00 - ₦ 1,000,000.00; Fee charged: ₦100</li>
      </ul>
      <h2>Bank: MONIEPOINT MFB</h2>
      <h2>Account Number: 6272075831</h2>

      <h2>Bank: STERLING BANK</h2>
      <h2>Account Number: 8984108498</h2>

      <h2>Bank: WEMA BANK</h2>
      <h2>Account Number: 9178609233</h2>

      <h2>Bank: VFD MFB</h2>
      <h2>Account Number:</h2>
      <h2>Account Name(s): Dataguri -hum</h2>
    </div>
  );
};

export default FundWallet;
