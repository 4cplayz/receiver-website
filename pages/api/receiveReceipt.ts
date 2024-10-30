import { NextApiRequest, NextApiResponse } from 'next';

// Temporary storage for the latest receipt data
let latestReceiptData = null;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    latestReceiptData = req.body; // Store the receipt data
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ message: 'Receipt received', data: latestReceiptData });
  } else if (req.method === 'GET') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ data: latestReceiptData });
  } else {
    res.setHeader('Allow', ['POST', 'OPTIONS', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
