const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const tenantSchema = new Schema({
  address: { type: String, required: true },
  price: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Tenant = mongoose.model("Tenant", tenantSchema);

module.exports = Tenant;