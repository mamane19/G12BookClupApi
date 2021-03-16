import express from "express";
import { addBorrowing, viewAllBorrowings, viewBorrowing, viewMemberBorrowings, returnBook } from '../controllers/borrowingController.js'

const borrowingRouter = express.Router();

//Add a Borrowing
borrowingRouter.post("/", addBorrowing);

//View a member members/:id
borrowingRouter.get("/:id", viewBorrowing);

//View all members members/
borrowingRouter.get("/", viewAllBorrowings);

//Return book members/
borrowingRouter.put("/:id", returnBook);

//View all borrowings of a particular member
borrowingRouter.get("/:borrower_name", viewMemberBorrowings);

export default borrowingRouter;






