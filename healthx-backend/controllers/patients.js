const patientsRouter = require("express").Router();
const Patient = require("../models/patient");

patientsRouter.get("/info", (req, res) => {
  res.set("content-type", "text/html");
  res.send(`<p>Many people present</p>`);
});

patientsRouter.get("/:id", (req, res) => {
Patient.findById(req.params.id).then(patient=>{
    res.json(patient)
})
});



patientsRouter.post("/", (req, res) => {
  const body = req.body;
  const patient = new Patient({
    name: body.name,
    age: body.age,
  });

  patient
    .save()
    .then((addedPatient) => res.json(addedPatient))
    .catch();
});

module.exports = patientsRouter;
