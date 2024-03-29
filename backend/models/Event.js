

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true},
        date: {
            type: Date,
            required: true },
        location: {
            type: String,
            required: true},
        description: {
            type: String,
            required: true}, 
        organizer: {
                    name: {type: String, required: true},
                    role: {type: String, required: true}
        }
    }, 
    {
        timestamps: true,
    }
); 


// This will point to the collection
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;