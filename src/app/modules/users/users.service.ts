import config from '../../../config'
import { generatedUserId } from './user.utils'
import { IUser } from './users.interface'
//Bussiness logic
import { User } from './users.model'
//get all user
const getAll = async (): Promise<IUser[]> => {
  return User.find()
}
//
const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto genareted incremental id
  const id = await generatedUserId()

  user.id = id

  // default password

  if (user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error(' Failed to create user')
  }

  return createdUser
}

export default {
  createUser,
  getAll,
}
