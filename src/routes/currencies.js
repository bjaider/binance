import {Router} from 'express'
import {currenciesGet} from '../controllers/currencies.js'

const router = Router()

router.get('/loseValue', currenciesGet)
export default router
