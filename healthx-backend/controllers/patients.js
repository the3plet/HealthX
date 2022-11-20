const patientsRouter = require("express").Router();
const Patient = require("../models/patient");

patientsRouter.use(function (req, res, next) {
    req.start = new Date(Date.now());
    next();
});

// all patient info
patientsRouter.get("/", (req, res) => {
    Patient.find({})
        .then((patients) => res.json(patients))
        .catch((err) => next(err));
});
// total patient info
patientsRouter.get("/info", (req, res) => {
    res.set("content-type", "text/html");
    Patient.find({})
        .then((patients) => res.send(`<p>HelthX has info of ${patients.length} patient</p>`))
});

// get a person by ID
patientsRouter.get("/:id", (req, res, next) => {
    Patient.findById(req.params.id)
        .then((patient) => res.json(patient))
        .catch((err) => next(err));
});
//delete a patient using ID
patientsRouter.delete("/:id", (req, res, next) => {
    Patient.findByIdAndRemove(req.params.id)
        .then(() => res.status(204).end())
        .catch((err) => next(err));
});
//inset data
patientsRouter.post("/", (req, res, next) => {
    const body = req.body;

    if (!body.name) {
        return res.status(400).json({
            error: "name is missing",
        });
    } else if (!body.age) {
        return res.status(400).json({
            error: "number is missing",
        });
    }

    const patient = new Patient({
        name: body.name,
        age: body.age,
        email: body.email,
        phone: body.phone,
        place: body.place,
        gender: body.gender,
        smoking: body.smoking,
        alcohol: body.alcohol,
        junkFood: body.junkFood,
        activity: body.activity,
        height: body.height,
        weight: body.weight,
        existingUser: body.existingUser
    });

    patient
        .save()
        .then((addedPatient) => res.json(addedPatient))
        .catch((err) => next(err));
});

module.exports = patientsRouter;
