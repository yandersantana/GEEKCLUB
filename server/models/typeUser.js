const mongoose = require('mongoose');
const { Schema } = mongoose;

const TypeUserSchema = new Schema({
    name: { type: String, required: false},
    description: { type: String, required: false}
});

module.exports = mongoose.model('TypeUser', TypeUserSchema);