const {Router} = require('express')
const {currenciesGet} = require('../controllers/currencies')

const router = Router()

router.get('/loseValue', currenciesGet)
module.exports = router
