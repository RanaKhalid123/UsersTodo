import { json } from 'body-parser';
import express from 'express';
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
import { products } from './routes/products';
import { userRouter } from './routes/users';
const app = express()

app.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(json()) 
app.use(products)
app.use(userRouter)
app.listen(3000, () => {
  console.log('server is listening on port 3000')
})
module.exports = app;
