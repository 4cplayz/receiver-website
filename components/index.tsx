
"use client";

import React, { useState, useEffect } from 'react';
import { getReceiptData } from '../app/receiveReceipt';

const Home = () => {
  const [receipt, setReceipt] = useState<any>(null);

  useEffect(() => {
    const fetchReceiptData = async () => {
      const data = await getReceiptData();
      if (data) {
        setReceipt(data); // Update displayed data when new data arrives
      }
    };

    const interval = setInterval(fetchReceiptData, 1000); // Poll every second

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  // Render items using a `for` loop
  const renderItems = () => {
    const items = [];
    if (Array.isArray(receipt?.items) && receipt.items.length > 0) {
      for (let i = 0; i < receipt.items.length; i++) {
        const item = receipt.items[i];
        items.push(
          <li key={item.id}>
            {item.name} - Quantity: {item.count} - Price: ${item.price * item.count}
          </li>
        );
      }
    } else {
      items.push(<p key="no-items">No items found in the receipt.</p>);
    }
    return items;
  };

  return (
    <div>
      <h1>Receipt Display</h1>
      {receipt ? (
        <div>
          <h2>Shop Name: {receipt.shopName}</h2>
          <h3>Payment Mode: {receipt.paiement}</h3>
          <h4>Client ID: {receipt.nfcCardID}</h4>
          <ul>{renderItems()}</ul>
          <h3>Total: ${receipt.total}</h3>
        </div>
      ) : (
        <p>No receipt data received yet</p>
      )}
    </div>
  );
};

export default Home;
