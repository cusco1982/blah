const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const unitSchema = new Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: String, required: true },
  state: { type: String, required: true },
  price: { type: String, required: true },
  rooms: { type: String, required: true },
  sqFeet: { type: String, required: true }
  // image: { type: String, required: true },
});

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;