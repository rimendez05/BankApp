const userController = require('../controllers/userController');
const express = require('express');

const router = express.Router();

//route to get all the users
router.get('/',userController.findAllUsers);

module.exports = router