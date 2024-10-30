'use client';
import React, { useState } from 'react';
interface ReceiptItem {
  id: number;
  name: string;
  price: number;
  count: number;
}
interface ReceiptData {
  nfcCardID: string;
  items?: ReceiptItem[];
  total: number;
  shopName: string;
  paiement: string;
}



const Page = () => {
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);

  const fetchReceiptData = async () => {
    try {
      const response = await fetch('/api/receiveReceipt', { method: 'GET' });
      const data = await response.json();
      if (data.data) {
        setReceiptData(data.data as ReceiptData);
        console.log(receiptData);
      }
    } catch (error) {
      console.error('Error fetching receipt data:', error);
    }
  };
  return (
    <div>
      <button
        onClick={fetchReceiptData}
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#3da9ae',
          color: '#fff',
          border: 'none',
          borderRadius: '1rem',
          cursor: 'pointer',
        }}
      >
        Voir votre reçu
      </button>

      {receiptData ? (
  <div style={{ marginTop: '1.5rem' }}>
    <h2>Receipt Details</h2>
    <p>{receiptData.total}</p>
  </div>
) : (
  <p style={{ marginTop: '1rem' }}>No receipt data available</p>
)}
    </div>
  );
};
export default Page;