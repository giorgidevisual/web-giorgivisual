import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:1234/',
  'http://localhost:3000/',
  'http://localhost:5000/'
]
const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin: string | undefined, callback: (err: Error | null, origin?: boolean | undefined) => void) =>  {

    if (acceptedOrigins.includes(origin as string)) {
      return callback(null, true)
    }
    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
});

export default corsMiddleware;