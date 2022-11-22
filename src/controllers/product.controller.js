const productService = require("../services/product.service");
const { catchAsync } = require("../utils/error");

const getNewProducts = catchAsync(async (req, res) => {
  const orderBy = req.query.orderBy;
  const limitNum = req.query.limitNum;
  res.status(200).json(await productService.getNewProducts(orderBy, limitNum));
});

module.exports = { getNewProducts }