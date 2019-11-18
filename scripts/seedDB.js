const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();

// This file empties the Books collection and inserts the books below
// console.log("ENV")
// console.log(process.env)
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/propmanagedb"
);
// mongoose.connect(process.env.MONGODB_URI || db, {useNewUrlParser: true, useUnifiedTopology: true})
//    .then(() => console.log('MongoDB Connected...'))
//    .catch(err => console.log(err));

const userSeed = [{
  email: "testing@gmail.com",
  password: "123456"
}];

db.User.collection.insertMany(userSeed)
.then(data => console.log("user inserted"))
.catch(err => {
  console.error(err);
  process.exit(1);
});

//    const tenantSeed = [
//     {
//       address: "anywhere",
//       price: "20000",
//       firstname: "first",
//       lastname: "last",
//       email: "test@emailserver.com",
//       phone: "11111111",
//       message: "blank",

//     },
//     {
//         address: "anywhere 2",
//         price: "30000",
//         firstname: "first 3",
//         lastname: "last 3",
//         email: "test3@emailserver.com",
//         phone: "111111113",
//         message: "blank 3",
  
//       },
//     ];

// db.Tenant
//   .remove({})
//   .then(() => db.Tenant.collection.insertMany(tenantSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
  
//   const ticketSeed = [
//     {
//       firstName: "user",
//       phone: "11111111",
//       body: "anything"
      

//     },
//     {
//         firstName: "user 3",
//         phone: "2222222",
//         body: "anything 3"
        
  
//       },
//     ];

// db.Ticket
//   .remove({})
//   .then(() => db.Ticket.collection.insertMany(ticketSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

//   const unitSeed = [
//     {
//       address: "somewhere",
//       city: "city 1",
//       zip: "07032",
//       state: "state 1",
//       price: "111111",
//       rooms: "1",
//       sqFeet: "1234"

      

//     },
//     {
//       address: "somewhere 1",
//       city: "city 2",
//       zip: "07033",
//       state: "state 2",
//       price: "2222222",
//       rooms: "3",
//       sqFeet: "456"
  
//       },
//     ];

// db.Unit
//   .remove({})
//   .then(() => db.Unit.collection.insertMany(unitSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });