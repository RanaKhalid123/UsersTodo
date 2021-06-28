import mongoose from 'mongoose'

interface IUsers {
  email: string;
  password: string;
}

interface todoModelInterface extends mongoose.Model<UsersDoc> {
  build(attr: IUsers): UsersDoc
}

interface UsersDoc extends mongoose.Document {
  email: string;
  password: string;
}

const todoSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

todoSchema.statics.build = (attr: IUsers) => {
  return new Users(attr)
}

const Users = mongoose.model<UsersDoc, todoModelInterface>('Users', todoSchema)

Users.build({
  email: 'email',
  password: 'password'
})

export { Users }




