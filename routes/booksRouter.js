import express from "express";
import { addbook, viewBook, viewAllBooks, deleteBook } from '../controllers/booksController.js'

const booksRouter = express.Router();

//Add a book
booksRouter.post("/", addbook);

//View a book
booksRouter.get("/:id", viewBook);

//View all books
booksRouter.get("/", viewAllBooks);

//Delete a book
booksRouter.delete("/:id", deleteBook);


export default booksRouter;






