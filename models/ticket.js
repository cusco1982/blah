const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ticketSchema = new Schema({
  name:  { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;