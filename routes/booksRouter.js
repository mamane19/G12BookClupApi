import express from "express";
import { addBook, viewAllBooks, viewBook, updateBook, deleteBook } from '../controllers/booksController.js'

const booksRouter = express.Router();

//Add a Book
booksRouter.post("/", addBook);

//View a book books/:id
booksRouter.get("/:id", viewBook);

//View all books books/
booksRouter.get("/", viewAllBooks);

//Update member record books/
booksRouter.put("/:id", updateBook);

//Delete a member books/:id
booksRouter.delete("/:id", deleteBook);

export default booksRouter;