import express from 'express';
const config = require('../../middleware/config')
const isAuthenticated = require('../../middleware/auth').isAuthenticated;
var jwtToke = require('jsonwebtoken')
const { usersData }  = require('../mockedData/users')
const router = express.Router()


//Register new user
router.post('/register', async (req, res) => {
  const { email,password } = req.body;
  const isAlreadyExist = usersData.find((item: any)=> item.email === email)
  if(isAlreadyExist){
    return res.status(401).send({
      success: false,
      message: 'User already exists with this email',
    });
  }
  let _id = 1+Math.max.apply(Math, usersData.map(function(item: any) { return item._id; }))
  usersData.push({_id, email, password })
  return res.status(201).send({_id, email, password })
})

//Login user to get jwt token
router.post('/login', async (req, res) => {
  const { email,password } = req.body;
  if(!email || !password){
    return res.status(401).send({
      success: false,
      message: 'Email or password is not provided',
    });
  }
  const user = usersData.find((item: any)=> item.email === email)
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
  return res.status(201).send({jwt})
})

export { router as userRouter };
