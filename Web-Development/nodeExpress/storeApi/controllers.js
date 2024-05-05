const Product = require("./storeSchema.js"); //schema of products

async function getAllStaticProduct(req,res){
  const product = await Product.find({});
  await res.status(200).json({product
  ,totalItems:product.length})
};

async function getAllProduct(req,res){
  const { name,featured,company,sort,fields } = req.query;
  const queryObject = {};
  if(company){
    queryObject.company = company;
  };
  if(featured){
    queryObject.featured = featured === 'true' ? true : false;
  };
  if(name){
    queryObject.name = {$regex:name,$options:'i'};
  };
  let result = Product.find(queryObject);
  if(sort){
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  }else{
    result = result.sort("createdAt");
  }
  if(fields){
   const fieldList = fields.split(',').join(' ');
   result = result.select(fieldList);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  const product = await result;
  await res.status(200).json({product
  ,totalItems:product.length});
};

module.exports = {
  getAllStaticProduct,
  getAllProduct
};