
import express from "express";
import membersRouter from "./membersRouter.js"
import booksRouter from "./booksRouter.js"
import borrowingRouter from "./borrowingRouter.js";

const router = express.Router();


router.use("/members", membersRouter);
router.use("/books", booksRouter);
router.use("/borrow",borrowingRouter);


export default router;