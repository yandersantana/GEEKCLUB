const mongoose = require('mongoose');
const { Schema } = mongoose;

const PeopleSchema = new Schema({
    name: { type: String, required: false},
    lastname: { type: String, required: false},
    identificationCard: { type: String, required: false},
    birthdate: { type: String, required: false},
    registrationDate: { type: String, required: false}
});

module.exports = mongoose.model('People', PeopleSchema);