const products = require("../Model/productModel");



   
  const allPro = async(req,res)=>{

    const { category, minPrice, maxPrice, sort, search, brand, page=1, limit=6 } = req.query;
    let query = {};

 // Search functionality (case-insensitive)
  if (search) {
      query.name = { $regex: search, $options: 'i' }; // Searches within product names
  }

  // Category filter
  if (category) {
      query.category = category;
  }

  if (brand) {
    query.brand = brand;
}

  // Price range filter
  if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
  }

  // Sorting
  const sortOption = {
    'LowToHigh': { price: 1 },        // Ascending order by price
    'HignToLow': { price: -1 },       // Descending order by price
    'NewtoOld': { creationDate: -1 }, // Descending order by creation date
    'OldtoNew': { creationDate: 1 },  // Ascending order by creation date
}[sort] || {}; // Default to an empty object if no sort option is provided


    try {
      const skip = (page - 1) * limit;
      const productsList = await products.find(query).sort(sortOption).limit(Number(limit)).skip(skip); // Skip the items for pagination
      const totalItems = await products.countDocuments(query);

      const allBrands = await products.distinct("brand", category ? { category } : {});
      const allCategories = await products.distinct("category", brand ? { brand } : {});

       // Fetch unique brands and categories
      res.status(200).send({
        products: productsList,
        currentPage: Number(page),
        totalPages: Math.ceil(totalItems / limit),
        totalItems,
        brands: allBrands, 
        categories: allCategories
        
    });
    } catch (error) {
      console.error("Error in allPro:", error);
      res.status(500).send({message: error})
    }
  }


  module.exports = {allPro }