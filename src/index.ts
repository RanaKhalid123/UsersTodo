import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { todoRouter } from './routes/todo'
import { userRouter } from './routes/users'

const app = express()
app.use(json())
app.use(todoRouter)
app.use(userRouter)

mongoose.connect('mongodb://khalidrasool768:Freelancing123@cluster0-shard-00-02.hzu31.mongodb.net:27017/assignment?ssl=true&replicaSet=atlas-11mki9-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, () => {
  console.log('connected to database')
})

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})