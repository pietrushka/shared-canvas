const express = require('express')

const authController = require('../controllers/authController')

const router = express.Router()


router.get('/', (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
})
router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router