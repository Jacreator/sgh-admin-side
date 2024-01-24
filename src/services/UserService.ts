import { Book } from '@/models/Book.model';
import { User } from '@/models/user.model';
import ApiError from '@/utils/ApiError';
import httpStatus from 'http-status';

export class UsersService {
  getAllUser = async () => {
    return await User.find({ is_deleted: false });
  };

  getUserById = async (id: any) => {
    return await User.findOne({ _id: id, is_deleted: false });
  };

  create = async (userPayload: any) => {
    return await User.create(userPayload);
  };

  getUserWithBorrowedBooks = async () => {
    return await User.find({}).populate('borrowedBooks').exec();
  };
}
