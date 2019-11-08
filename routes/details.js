let express = require('express');
let pay_controller = require('../controller/payslip');
let router = express.Router();

router.post('/payslip',pay_controller.details)

module.exports = router;



