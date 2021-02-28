const Router = require('express')

const router = new Router()
const authMiddleware = require('../middlewares/auth.middleware')
const filesController = require('../controllers/files.controller')

router
  .route('/')
  .post(authMiddleware, filesController.createDir)
  .get(authMiddleware, filesController.getFiles)

module.exports = router
