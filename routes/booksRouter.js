import express from "express";
import { addBook, viewAllBooks, viewBook, updateBook, deleteBook } from '../controllers/booksController.js';
import { authenticate } from '../middlewares/auth.js';

const booksRouter = express.Router();

//Add a Book
booksRouter.post("/", authenticate, addBook);

//View a book books/:id
booksRouter.get("/:id", authenticate, viewBook);

//View all books/
booksRouter.get("/", authenticate, viewAllBooks);

//Update book record books/
booksRouter.put("/:id", authenticate, updateBook);

//Delete a book books/:id
booksRouter.delete("/:id", authenticate, deleteBook);

export default booksRouter;