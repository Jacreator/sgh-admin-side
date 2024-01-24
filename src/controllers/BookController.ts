import { BookService } from '@/services/BookService';
import ApiError from '@/utils/ApiError';
import httpStatus from 'http-status';

export class BookController {
  private bookService: any;
  constructor() {
    this.bookService = new BookService();
  }

  /**
   * Get all users for admin private function
   *
   * @param {any} type
   * @route GET /api/v1/admin/users/
   *
   * @return {UsersController}
   * @memberOf UsersController
   */
  getAllBooks = async (req: any, res: any, next: any) => {
    try {
      res.status(httpStatus.OK).json({
        code: httpStatus.OK,
        message: 'All users',
        data: await this.bookService.getAll(),
      });
    } catch (error) {
      throw new ApiError(httpStatus.BAD_REQUEST, error.message);
    }
  };

  getBookById = async (req: any, res: any, next: any) => {
    try {
      const { id } = req.query;

      res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        message: 'book detail',
        data: await this.bookService.getBookById(id),
      });
    } catch (error) {
      throw new ApiError(httpStatus.NOT_FOUND, error.message);
    }
  };

  createBook = async (req: any, res: any) => {
    try {
      res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        message: 'book created',
        data: await this.bookService.createBook(req.body),
      });
    } catch (error) {
      throw new ApiError(httpStatus.NOT_FOUND, error.message);
    }
  };

  notAvailableBooks = async (req: any, res: any) => {
    try {
      res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        message: 'not available books',
        data: await this.bookService.fetchBorrowedBooks(),
      });
    } catch (error) {
      throw new ApiError(httpStatus.NOT_FOUND, error.message);
    }
  };

  removeBookFromCatalog = async (req: any, res: any) => {
    try {
      const { id } = req.params;
      res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        message: 'not available books',
        data: await this.bookService.deleteBook(id),
      });
    } catch (error) {
      throw new ApiError(httpStatus.NOT_FOUND, error.message);
    }
  };
}
