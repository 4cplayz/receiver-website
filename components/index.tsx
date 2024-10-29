// receiver-website/pages/index.tsx

import React, { useState, useEffect } from 'react';
import { getReceiptData } from '../app/receiveReceipt';

const Home = () => {
  const [receipt, setReceipt] = useState<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const data = getReceiptData();
      setReceipt(data); // Update displayed data when new data arrives
    }, 1000); // Poll every second

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div>
      <h1>Receipt Display</h1>
      {receipt ? (
        <div>
          <h2>Shop Name: {receipt.shopName}</h2>
          <h3>Payment Mode: {receipt.paiement}</h3>
          <h4>Client ID: {receipt.nfcCardID}</h4>
          <ul>
            {receipt.items.map((item: any) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.count} - Price: ${item.price * item.count}
              </li>
            ))}
          </ul>
          <h3>Total: ${receipt.total}</h3>
        </div>
      ) : (
        <p>No receipt data received yet</p>
      )}
    </div>
  );
};

export default Home;
