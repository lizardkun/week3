const usersControllers = require('../controllers/user')
const express = require('express')
const router = express.Router()
router.post('/login', usersControllers.loginUser)
router.get('/logout', usersControllers.logoutUser)
module.exports = router;