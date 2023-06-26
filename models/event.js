const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {
        type: String,
        trim: true,
        required: true
    },
    address: {type: String, requuired: true},
    eventType: {type: String, required: false},
    numOfGuests: {type: Number, min: 40, max: 250, required: true},
    date: {type: Date, required: true},
    servingTime: {enum: [1-12], enum: ['AM', 'PM']},
    mealPackage: {enum: ['The Classic Plate', 'Tijaunero Plate', 'Custom Plate', 'Veggie Plate'], required: true},
  }, {
    timestamps: true
  }); 

module.exports = mongoose.model('Event', eventSchema)