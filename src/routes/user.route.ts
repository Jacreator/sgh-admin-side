import { UsersController } from "@/controllers/UsersController";
import express from "express";
const router = express.Router();

const { getUserById, getAllUsers, create, getUserWithBorrowedBooks } =
  new UsersController();

router.get('/:id', getUserById);

router.get('/', getAllUsers);

router.post('/', create)

router.get('/borrowed', getUserWithBorrowedBooks);

export default router;