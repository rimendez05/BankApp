const authController = require('../controllers/authController');
const express = require('express')

const router = express.Router();

//route to signup
router.post('/signup',authController.signup);

//route to login
router.post('/login',authController.login);

module.exports = router