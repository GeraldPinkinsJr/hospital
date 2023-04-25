var express = require("express");
var router = express.Router();
const { Patient } = require("../models/patient");
/* GET users listing. */

router.get("/", (req, res)=> {
    Patient.findAll()
    .then((data)=>res.status(201).send(data))
    .catch((error)=>res.status(400).send(error))
});

router.post("/add-patient", (req, res) => {
   Patient.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        insurance: req.body.insurance,

    })
    .then((data)=> res.status(201).send(data))
    .catch((error)=>res.status(400).send(error))
});

module.exports = router;
