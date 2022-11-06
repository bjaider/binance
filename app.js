import express from 'express'
import cors from 'cors'
import {dbConnection} from './src/database/config.js'
import users from './src/routes/users.js'
import currencies from './src/routes/currencies.js'
import orders from './src/routes/orders.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT

const paths = {
  users: '/api/user',
  currencies: '/api/currencies',
  orders: '/api/orders',
}

const connectDB = async () => {
  await dbConnection()
}

const middlewares = () => {
  app.use(cors())
  app.use(express.json())
}

const routes = () => {
  app.use(paths.users, users)
  app.use(paths.currencies, currencies)
  app.use(paths.orders, orders)
}

app.listen(port, () => {
  console.log('Server running on port', port)
})

connectDB()

middlewares()

routes()

export default app
