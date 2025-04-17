import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      console.log('Received data from GoHighLevel:', data);

      // Process the data (e.g., store it in a database, etc.)

      res.status(200).json({ received: true });
    } catch (error) {
      console.error('Error processing data:', error);
      res.status(500).json({ error: 'Failed to process data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
