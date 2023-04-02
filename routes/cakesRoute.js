const express = require("express")
const router = express.Router()
const Cake = require ("../models/cakeModel")

router.get("/getallcakes", async (req, res) => {
try {
    const cakes = await Cake.find({})
    res.send(cakes)
} catch (error) {
    return res.status(400).json({message : error});
}
})

module.exports = router;