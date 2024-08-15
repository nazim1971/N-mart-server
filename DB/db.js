const mongoose = require('mongoose');
require('dotenv').config();


const uri = process.env.MY_DB

async function connectDB() {
    try {
      await mongoose.connect(uri);
      console.log("Connected to MongoDB successfully!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); 
    }
  }
  
  module.exports = connectDB;