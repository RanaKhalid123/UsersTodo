import express, { Request, Response } from 'express'
import mongoose = require('mongoose')
import { Users } from '../../models/users'
const config = require('../../middlewares/config')
const isAuthenticated = require('../../middlewares/auth').isAuthenticated;
var jwtToke = require('jsonwebtoken')

const router = express.Router()

router.get('/user/:userId', isAuthenticated, async (req: Request, res: Response) => {
  let response = {};
  let userId = mongoose.Types.ObjectId(req.params.userId)
  const user = await Users.findOne({'_id': userId}).select("-password")
  response = {user};
  return res.status(200).send(response)
})

router.post('/register', async (req: Request, res: Response) => {
  const { email,password } = req.body;
  let response = {};
  const user = Users.build({ email, password })
  response = {user};
  await user.save()
  return res.status(201).send(response)
})

router.post('/login', async (req: Request, res: Response) => {
  const { email,password } = req.body;
  if(!email || !password){
    return res.status(401).send({
      success: false,
      message: 'Email or password is not provided',
    });
  }
  let response = {};
  const user = await Users.findOne({'email': email})
  if(!user){
    return res.status(404).send({
      message: 'Email is not associated with any account',
    });
  }
  if(user && user.password !== password){
    return res.status(404).send({
      message: 'Password is not correct',
    });
  }
  let jwt = jwtToke.sign({user: user.email},
    config.secret,
     { expiresIn: '24h' // expires in 24 hours
     });
  response = {jwt}
  return res.status(201).send(response)
})

export { router as userRouter }