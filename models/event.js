const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {type: String, required: true},
    place: {type: String, required: true},
    description: {type: String, required: true},
    date: Date
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;