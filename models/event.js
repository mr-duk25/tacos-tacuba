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
    servingTime: {type: Number, enum: [1-12]},
    servingTimeAMPM: {type: Number, enum: ['AM', 'PM']},
    mealPackage: {enum: ['The Classic Plate', 'Tijaunero Plate', 'Custom Plate', 'Veggie Plate']},
  }, {
    timestamps: true
  }); 

module.exports = mongoose.model('Event', eventSchema)