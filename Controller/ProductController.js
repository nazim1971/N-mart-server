const products = require("../Model/productModel");



   
  const allPro = async(req,res)=>{
    try {
      
     const product = await products.find();
     res.status(201).send(product)
    } catch (error) {
      res.status(500).send({message: error.message})
    }
  }


  module.exports = {allPro }