import express, { Request, Response } from 'express'
import corsMiddleware from './middleware/cors'

const app = express();
app.disable('x-powered-by')

app.use(corsMiddleware());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('<h1> Hola Giorgi</h1>')
  res.end
})

const PORT = process.env.PORT ?? 5000;
 app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`));