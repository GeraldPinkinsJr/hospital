var express = require("express");
var router = express.Router();
const {Doctor} = require("../models")

/* GET users listing. */
router.get("/", (req, res)=> {
    Doctor.findAll()
    .then((data)=>res.status(201).send(data))
    .catch((error)=>res.status(400).send(error))
});

router.post("/add-doctor", (req, res) => {
    Doctor.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,

    })
    .then((data)=> res.status(201).send(data))
    .catch((error)=>res.status(400).send(error))
});

// router.get("/doctors", async (req, res) => {
//   const doctors = await User.findAll();
//   res.json(Doctor);
// });

module.exports = router;
