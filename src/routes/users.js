const {Router} = require('express')
const {check} = require('express-validator')
const {userGet, usersPost} = require('../controllers/users')
const {checkFields} = require('../middlewares/check-fields')

const router = Router()

router.get(
  '/userInfo/:uid',
  [check('uid', 'Invalid ID').isMongoId(), checkFields],
  userGet,
)
router.post(
  '/',
  [
    check('APIKey', 'APIKey must be provided').not().isEmpty(),
    check('SecretKey', 'SecretKey must be provided').not().isEmpty(),
    checkFields,
  ],
  usersPost,
)
module.exports = router
