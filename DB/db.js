const mongoose = require('mongoose');
require('dotenv').config();


const uri = process.env.MY_DB

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectDB() {
    try {
      await mongoose.connect(uri, clientOptions);
      console.log("Connected to MongoDB successfully!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); // Exit process with failure
    }
  }
  
  module.exports = connectDB;