import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  //Incremental Auto generated Id
  const id = await generateUserId();

  user.id = id;

  // Default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const create = await User.create(user);
  if (!create) {
    throw new ApiError(400, 'Failed to create user.');
  }
  return create;
};

export const UserService = {
  createUser,
};
