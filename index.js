const express = require('express');
const app = express()
const cors = require('cors');
const connectDB = require('./DB/db');
require('dotenv').config();
const port = process.env.PORT || 5000;


// middleware
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174' , 'https://n-mart-43656.web.app'],
    credentials: true,
    optionSuccessStatus: 200,
  }
  app.use(cors(corsOptions))
  app.use(express.json());
 
  // DB
  connectDB()

  const productsRoute = require('./Routes/productsRoute');

  app.use('/v1', productsRoute)



  app.get('/', (req, res)=>{
    res.send('N-mart Is On Fire')
})

app.listen(port, ()=>{
    console.log(`MFS is running on port: ${port}`);
})