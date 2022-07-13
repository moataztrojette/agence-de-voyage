const express = require("express")
const router = express.Router()
const {voucher_client,consulter_voucher,les_vouchers,archiver,serche,filtrer_les_vouchers} = require("../controllers/voucher.c")


router.post('/',voucher_client)
router.get("/find/:id",consulter_voucher)
router.get("/vouchers",les_vouchers)
router.delete('/:id',archiver)
router.get("/serche/:name", serche);
router.post("/filter",filtrer_les_vouchers)


module.exports = router;


