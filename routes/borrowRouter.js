import express from "express";
import { addBorrow, viewAllBorrows, viewBorrow, viewMemberBorrows, returnBook } from '../controllers/borrowController.js'
import {authenticate} from "../middlewares/auth.js";

const borrowRouter = express.Router();

//Add a Borrowing
borrowRouter.post("/", authenticate, addBorrow);

//View a member members/:id
borrowRouter.get("/:id", authenticate, viewBorrow);

//View all members members/
borrowRouter.get("/", authenticate, viewAllBorrows);

//Return book members/
borrowRouter.put("/:id", authenticate, returnBook);

//View all borrowings of a particular member
borrowRouter.get("/:borrower_name", authenticate, viewMemberBorrows);

export default borrowRouter;
