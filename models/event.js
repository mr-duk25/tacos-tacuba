const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {type: String},
    phone: {type: Number},
    email: {
        type: String,
        trim: true,
        
    },
    address: {type: String},
    eventType: {type: String},
    numOfGuests: {type: Number, min: 40, max: 250},
    date: {type: Date},
    servingTime: {type: Number, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]},
    servingTimeAMPM: {type: String, enum: ['AM', 'PM']},
    mealPackage: {type: String, enum: ['The Classic Plate', 'The Tijaunero Plate', 'The Custom Plate', 'The Veggie Plate']},
  }, {
    timestamps: true
  }); 

module.exports = mongoose.model('Event', eventSchema)