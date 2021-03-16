import express from "express";
import { borrowBook, returnBook, viewBorrowing, viewAllBorrowing} from '../controllers/borrowingController.js'

const borrowRouter = express.Router();

//Borrow book/ create borrow record
borrowRouter.post("/", borrowBook);

// return book
borrowRouter.get("/:id", returnBook);

//View borrowing
borrowRouter.get("/", viewBorrowing);

// view all borrowing of a particular member /:id
borrowRouter.get("/:id", viewAllBorrowing);

export default borrowRouter;






