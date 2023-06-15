const transferController = require('../controllers/transferController');
const express = require('express')

const router = express.Router();

//route to make transfers
router.post('/',transferController.transfer)

//route to get the transfers history
.get('/:id/transfers', transferController.transfershistory)

module.exports = router