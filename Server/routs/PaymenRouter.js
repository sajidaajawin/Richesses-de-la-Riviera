const express = require("express");
const { upload } = require("../middlewares/MulterMiddlewares");
const authentication = require('../middlewares/authMiddleware')

const router = express.Router();
const paymentsController = require("../controlers/PaymentControler");

router.post("/charge",authentication.authenticateToken, paymentsController.newpayment);
router.get("/payments", paymentsController.getpayments);

router.get("/paymentidUser/:userid", paymentsController.getpaymentidUser);
router.get("/paymentid/:payment_id", paymentsController.getpaymentid);

router.delete("/delete/:payment_id", paymentsController.deletepayment);
router.get("/paymentid/:payment_id", paymentsController.getpaymentid);

module.exports = router;
