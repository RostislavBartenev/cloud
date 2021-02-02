const { check } = require('express-validator')

const { registrationController, loginController } = require("../controllers/auth.controllers")

const Router = require('express')
const router = new Router()

router.post('/registration', [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Password must be longer than 3').isLength({ min: 3 }),
  ], registrationController)

router.post('/login', loginController)

module.exports = router
