import { IUser } from './users.interface'
import { User } from './users.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const create = await User.create(user)
  if (!create) {
    throw new Error('Failed to create user.')
  }
  return create
}

export default {
  createUser,
}
