const Product = require("../models/product");

function newProduct(req, res) {
  res.render("products/new.ejs");
}

// function create(req, res) {
//   req.body.published = !!req.body.published;
//   const product = new Product(req.body);
//   product.save(function (err) {
//     if (err) return res.render("products/new.ejs");
//     console.log(product);
//     res.redirect("/products/new");
//   });
// }

async function create(req, res) {
  try {
    req.body.published = !!req.body.published;
    const product = new Product(req.body);

    const doc = await Product.create(product);
    console.log(doc);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  new: newProduct,
  create: create,
};
