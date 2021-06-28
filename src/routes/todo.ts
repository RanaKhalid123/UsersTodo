import express, { Request, Response } from 'express'
import { Todo } from '../../models/todo'
const router = express.Router()
const isAuthenticated = require('../../middlewares/auth').isAuthenticated;

router.get('/list-tasks', isAuthenticated, async (req: Request, res: Response) => {
  let response = {};
  const tasks = await Todo.find({})
  response = {tasks};
  return res.status(200).send(response)
})

router.post('/create-task', isAuthenticated , async (req: Request, res: Response) => {
  const { name } = req.body;
  let response = {};
  const task = Todo.build({ name })
  response = {task};
  await task.save()
  return res.status(201).send(response)
})

export { router as todoRouter }