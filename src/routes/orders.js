import {Router} from 'express'
import {check} from 'express-validator'
import {ordersPost} from '../controllers/orders.js'
import {checkFields} from '../middlewares/check-fields.js'

const router = Router()

router.post(
  '/sendOrder/:uid',
  [check('uid', 'Invalid ID').isMongoId(), checkFields],
  ordersPost,
)

export default router
