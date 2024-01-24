import { Book } from '@/models/Book.model';
import ApiError from '@/utils/ApiError';
import httpStatus from 'http-status';
import { error } from 'winston';

export class BookService {
  getAll = async () => {
    return await Book.find({ is_deleted: false });
  };

  getBookById = async (id: any) => {
    return await Book.findOne({ _id: id, is_deleted: false });
  };

  createBook = async (payload: any) => {
    return await Book.create(payload);
  };

  deleteBook = async (id: string) => {
    const book = await this.getBookById(id);
    if (!book) {
      throw new ApiError(httpStatus.NOT_FOUND, 'book Not found');
    }

    if (book.borrowed) {
      throw new ApiError(
        httpStatus.NOT_ACCEPTABLE,
        'book is currently borrowed out',
      );
    }

    return book.delete();
  };

  fetchBorrowedBooks = async () => {
    return await Book.aggregate([
      {
        $match: { borrowedBy: { $ne: null }, borrowed: true }, // Select books having a borrower
      },
      {
        $project: {
          _id: 1,
          title: 1,
          author: 1,
          borrowedBy: 1,
          dueDate: 1,
          availableOn: {
            $dateAdd: { startDate: '$dueDate', units: '1', unit: 'day' },
          }, // Add 1 day to due date for estimated availability
        },
      },
    ]).exec();
  };
}
