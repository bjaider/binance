import {Router} from 'express'
import {check} from 'express-validator'
import {userGet, userGetByParams, usersPost} from '../controllers/users.js'
import {checkFields} from '../middlewares/check-fields.js'

const router = Router()

router.post(
  '/',
  [
    check('APIKey', 'APIKey must be provided').not().isEmpty(),
    check('SecretKey', 'SecretKey must be provided').not().isEmpty(),
    checkFields,
  ],
  usersPost,
)
router.get(
  '/',
  [
    check('APIKey', 'APIKey must be provided').not().isEmpty(),
    check('SecretKey', 'SecretKey must be provided').not().isEmpty(),
    checkFields,
  ],
  userGetByParams,
)
router.get(
  '/userInfo/:uid',
  [check('uid', 'Invalid ID').isMongoId(), checkFields],
  userGet,
)

export default router
