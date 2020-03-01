let mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kailey:apipractice@cluster0-2ec2o.gcp.mongodb.net/test?retryWrites=true&w=majority')

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)