function newProduct(req, res) {
  res.render("products/new.ejs");
}

async function create(req, res) {
  try {
    const Product = require("../models/product");
    req.body.published = !!req.body.published;
    const product = req.body;
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

// const Product = require("../models/product").model;

// function newProduct(req, res) {
//   res.render("products/add");
// }

// async function index(req, res) {
//   try {
//     const products = await Product.find({});
//     res.render("products/index", { title: "Products", products });
//   } catch (err) {
//     console.error(err);
//   }
// }

// async function create(req, res) {
//   try {
//     const product = new Product(req.body);
//     const savedProduct = await product.save();
//     console.log(savedProduct);
//     res.redirect("/products");
//   } catch (err) {
//     console.error(err);
//     res.redirect("/products/add");
//   }
// }

// async function show(req, res) {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.render("products", { title: "All Products", product });
//   } catch (err) {
//     console.error(err);
//   }
// }

// async function deleteProduct(req, res) {
//   try {
//     const product = await Product.findByIdAndRemove(req.params.id);
//     if (!product) {
//       return res.status(404).send();
//     }
//     res.redirect("/products");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err);
//   }
// }

// module.exports = { index, create, newProduct, show, deleteProduct };
