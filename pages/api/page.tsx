import React, { useEffect, useState } from 'react'

const ApiPage = () => {
  const [receiptData, setReceiptData] = useState(null);

  useEffect(() => {
    async function fetchReceipt() {
      const response = await fetch('/api/receiveReceipt'); // Call your API endpoint
      const data = await response.json();
      setReceiptData(data);
    }
    fetchReceipt();
  }, []);

  return (
    <div>
      <h1>Receipt Data</h1>
      {receiptData ? <pre>{JSON.stringify(receiptData, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default ApiPage;