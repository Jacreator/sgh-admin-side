import { BookController } from '@/controllers/BookController';
import express from 'express';
const router = express.Router();

const { getAllBooks, getBookById, createBook, removeBookFromCatalog } =
  new BookController();

router.get('/', getAllBooks);

router.get('/:id', getBookById);

router.post('/', createBook);

router.delete('/:id', removeBookFromCatalog);

export default router;
