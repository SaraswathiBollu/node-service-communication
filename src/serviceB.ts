import express, { Request, Response } from 'express';

const app = express();
const PORT_B = 4000;

// Simple endpoint that returns some data
app.get('/from-b', (req: Request, res: Response) => {
  const payload = {
    service: 'B',
    message: 'Hello from Service B',
    timestamp: new Date().toISOString()
  };

  console.log('[Service B] /from-b called, responding with:', payload);
  res.json(payload);
});

export function startServiceB() {
  app.listen(PORT_B, () => {
    console.log(`Service B listening on http://localhost:${PORT_B}`);
  });
}
