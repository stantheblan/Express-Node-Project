const Product = require('../models/products.js');

const dataController = {
  index(req, res, next){
    Product.find({}, (err, allProducts) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      }else {
        res.locals.data.products = allProducts
        next()
      }
    });
  },
  create(req, res, next){
    // Use Model to create Product Document
    Product.create(req.body, (err, createdProduct) => {
        // Once created - respond to client
        if(err){
          res.status(404).send({
            msg: err.message
          })
        }else {
          res.locals.data.Product = createdProduct
          next()
        }
    });
  },
  show(req, res, next){
    Product.findById(req.params.id, (err, foundProduct)=>{
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.Product = foundProduct
        next()
      }
    })
  },
  update(req, res, next){
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.Product = updatedProduct
        next()
      }
    });
  },
  destroy(req, res, next){
    Product.findByIdAndRemove(req.params.id, (err, Product) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.Product = Product
        next()
      }
    });
  }
}

module.exports = dataController 