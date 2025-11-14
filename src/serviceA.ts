import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const PORT_A = process.env.PORT || 3000; // 👈 important for Azure

const SERVICE_B_BASE_URL = 'http://localhost:4000';

app.get('/from-a', async (req: Request, res: Response) => {
  try {
    console.log('[Service A] /from-a called. Calling Service B...');
    const responseFromB = await axios.get(`${SERVICE_B_BASE_URL}/from-b`);

    const combinedResponse = {
      service: 'A',
      messageFromA: 'Hello from Service A',
      dataFromB: responseFromB.data,
      timestamp: new Date().toISOString()
    };

    res.json(combinedResponse);
  } catch (error) {
    console.error('[Service A] Error calling Service B:', error);
    res.status(500).json({ error: 'Failed to communicate with Service B' });
  }
});

export function startServiceA() {
  app.listen(PORT_A, () => {
    console.log(`Service A listening on port ${PORT_A}`);
  });
}
