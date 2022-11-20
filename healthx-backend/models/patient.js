const mongoose = require("mongoose")
const url = 'mongodb+srv://admin:admin@cluster0.aoulm42.mongodb.net/?retryWrites=true&w=majority'
const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  place: String,
  gender: String,
  smoking: Number,
  alcohol: Number,
  junkFood: Number,
  activity: Number,
  height: Number,
  weight: Number
})

console.log('connecting to', url)

mongoose
  .connect(url)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

patientSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Patient', patientSchema)
// module.exports = patientSchema;
