import express, { Request, Response } from 'express'
import corsMiddleware from './middleware/cors'

const app = express();
app.use(corsMiddleware());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Hola Giorgi')
  res.end()
})

const PORT = process.env.port ?? 5000;
const server = app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`));