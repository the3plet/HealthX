const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const patientsRouter = require('./controllers/patients')

app.use(express.json());
app.use(cors());
// app.use(express.static("build"))



app.use("/patient", patientsRouter)
// app.use("")

module.exports = app
