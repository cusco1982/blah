import axios from "axios";

export default {
  // login
  login: function() {
    return axios.post("/api/login/");
  },
  // Gets the book with the given id
  contact: function(id) {
    return axios.get("/api/contact/" + id);
  },
  
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getTennat: function() {
    return axios.get("/api/tenants/");
  },
  getTicket: function() {
    return axios.get("/api/tickets/");
  },
  getUnit: function() {
    return axios.get("/api/units/");
  },
  deleteTenant: function(id) {
    return axios.delete("/api/tenants/" + id);
  },
  deleteTicket: function(id) {
    return axios.delete("/api/tickets/" + id);
  },
  deleteUnit: function(id) {
    return axios.delete("/api/units/" + id);
  },
  createUnit: function(unitData) {
    return axios.post("/api/units/", unitData);
  },
  upload: function(formData) {
    return axios.post("/api/image-upload/", formData);
  },
  postPay: function(token) {
    return axios.post("/api/checkout/", token);
  },

  createTicket: function(ticketData) {
    return axios.post("/api/Tickets/", ticketData);
  },


};
