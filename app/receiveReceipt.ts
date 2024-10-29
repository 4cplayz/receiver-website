// receiver-website/pages/api/receiveReceipt.ts

import { NextApiRequest, NextApiResponse } from 'next';

let receiptData: any = null; // Store the receipt data

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    receiptData = req.body; // Save the data
    res.status(200).json({ message: 'Receipt received successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export const getReceiptData = () => receiptData; // Export function to access the data
