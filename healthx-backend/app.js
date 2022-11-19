const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const patientsRouter = require('./controllers/patients')

const mongoUrl = 'mongodb+srv://admin:admin@cluster0.aoulm42.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoUrl)

app.use(cors());
app.use(express.json());

app.use("/patient", patientsRouter)
// app.use("")

module.exports = app
