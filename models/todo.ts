import mongoose from 'mongoose'

interface ITodo {
  name: string;
}

interface todoModelInterface extends mongoose.Model<TodoDoc> {
  build(attr: ITodo): TodoDoc
}

interface TodoDoc extends mongoose.Document {
  name: string;
}

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

todoSchema.statics.build = (attr: ITodo) => {
  return new Todo(attr)
}

const Todo = mongoose.model<TodoDoc, todoModelInterface>('Todo', todoSchema)

Todo.build({
  name: 'some title'
})

export { Todo }




