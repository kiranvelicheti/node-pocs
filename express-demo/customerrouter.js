const express = require("express");

const CustomerCtrl = require("./customerctlr");

const router = express.Router();

router.post("/customer", CustomerCtrl.createcustomer);
router.put("/customer/:id", CustomerCtrl.updatecustomer);
router.delete("/customer/:id", CustomerCtrl.deletecustomer);
router.get("/customer/:id", CustomerCtrl.getcustomerById);
router.get("/customers", CustomerCtrl.getcustomers);

module.exports = router;
