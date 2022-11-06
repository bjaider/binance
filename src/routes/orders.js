const {Router} = require('express')
const {check} = require('express-validator')
const {ordersPost} = require('../controllers/orders')
const {checkFields} = require('../middlewares/check-fields')

const router = Router()

router.post(
  '/sendOrder/:uid',
  [check('uid', 'Invalid ID').isMongoId(), checkFields],
  ordersPost,
)

module.exports = router
