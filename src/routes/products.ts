import express from 'express';
const router = express.Router()
const isAuthenticated = require('../../middleware/auth').isAuthenticated;
const { usersData }= require('../mockedData/users')
const {productsData, cartData, shippingData, productPayment, productConfirmation } = require('../mockedData/product')


//Add product to cart
router.post('/add-to-cart', isAuthenticated , async (req, res) => {
  const { userId, productId } = req.body;
  if(!userId || !productId){
    return res.status(401).send({
      success: false,
      message: 'userId or product is not provided',
    });
  }
  const isProduct = productsData.find((item: any)=> item._id === productId)
  if(!isProduct){
    return res.status(401).send({
      success: false,
      message: 'product is not available',
    });
  }
  const isUser = usersData.find((item: any)=> item._id === userId)
  if(!isUser){
    return res.status(401).send({
      success: false,
      message: 'user is not available',
    });
  }
  let _id = 1+Math.max.apply(Math, cartData.map(function(item: any) { return item._id; }))
  cartData.push({_id, userId, productId})
  return res.status(201).send({'message': 'product has been added to cart successfully', 'statusCode': 200})
})

//Shipping the product
router.post('/shipping', isAuthenticated , async (req, res) => {
  const { userId, productId, address, shipmentFee, shipmentStatus } = req.body;
  if(!userId || !productId || !address){
    return res.status(401).send({
      success: false,
      message: 'userId or productId or address is not provided',
    });
  }
  const isProduct = productsData.find((item: any)=> item._id === productId)
  if(!isProduct){
    return res.status(401).send({
      success: false,
      message: 'product is not available',
    });
  }
  const isUser = usersData.find((item: any)=> item._id === userId)
  if(!isUser){
    return res.status(401).send({
      success: false,
      message: 'user is not available',
    });
  }
  let _id = 1+Math.max.apply(Math, cartData.map(function(item: any) { return item._id; }))
  shippingData.push({_id, userId, productId, address, shipmentFee, shipmentStatus})
  return res.status(201).send({'message': 'product shipping has been initiated successfully', 'statusCode': 200})
})


//Payment of product
router.post('/payment', isAuthenticated , async (req, res) => {
  const { userId, productId, price, shippingId } = req.body;
  if(!userId || !productId || !price || !shippingId ){
    return res.status(401).send({
      success: false,
      message: 'userId, productId, price or shippingId is not provided',
    });
  }
  const isProduct = productsData.find((item: any)=> item._id === productId)
  if(!isProduct){
    return res.status(401).send({
      success: false,
      message: 'product is not available',
    });
  }
  const isUser = usersData.find((item: any)=> item._id === userId)
  if(!isUser){
    return res.status(401).send({
      success: false,
      message: 'user is not available',
    });
  }
  let _id = 1+Math.max.apply(Math, cartData.map(function(item: any) { return item._id; }))
  productPayment.push({_id, userId, productId, price, status: 'paid', shippingId})
  return res.status(201).send({'message': 'product payment has been done successfully', 'statusCode': 200})
})

//Confirmation of product order
router.post('/confirmation', isAuthenticated , async (req, res) => {
  const { userId, productId, price, shippingId, confirmation } = req.body;
  if(!userId || !productId || !price || !shippingId ){
    return res.status(401).send({
      success: false,
      message: 'userId, productId, price or shippingId is not provided',
    });
  }
  const isProduct = productsData.find((item: any)=> item._id === productId)
  if(!isProduct){
    return res.status(401).send({
      success: false,
      message: 'product is not available',
    });
  }
  const isUser = usersData.find((item: any)=> item._id === userId)
  if(!isUser){
    return res.status(401).send({
      success: false,
      message: 'user is not available',
    });
  }
  let _id = 1+Math.max.apply(Math, cartData.map(function(item: any) { return item._id; }))
  productConfirmation.push({_id, userId, productId, price, status: 'paid', shippingId, confirmation})
  return res.status(201).send({'message': 'Product confirmation has been created', 'statusCode': 200})
})


export { router as products };
