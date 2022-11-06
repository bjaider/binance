const express = require('express')
const cors = require('cors')
const {dbConnection} = require('../database/config')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT

    this.paths = {
      users: '/api/user',
      currencies: '/api/currencies',
      orders: '/api/orders',
    }

    this.connectDB()

    this.middlewares()

    this.routes()
  }

  async connectDB() {
    await dbConnection()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes() {
    this.app.use(this.paths.users, require('../routes/users'))
    this.app.use(this.paths.currencies, require('../routes/currencies'))
    this.app.use(this.paths.orders, require('../routes/orders'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port', this.port)
    })
  }
}

module.exports = Server
