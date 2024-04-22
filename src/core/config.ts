import { config } from 'dotenv'

config()

export const { PORT_APP, HOST_APP, NODE_ENV, JWT_SECRET } = process.env
