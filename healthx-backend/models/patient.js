const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    name: String,
    Sex: String,
    Age: Number,
    Height: Number,
    Weight: Number,
    BP: Number,
    Smocking: Boolean,
    Alchohol:Boolean
})

module.exports = patientSchema;