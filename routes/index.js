import express from "express";
import membersRouter from "./membersRouter.js";
import usersRouter from "./usersRouter.js";
import booksRouter from "./booksRouter.js";
import borrowRouter from "./borrowRouter.js";

const router = express.Router();

router.use("/members", membersRouter);
router.use("/users", usersRouter);
router.use("/books", booksRouter);
router.use("/borrow", borrowRouter);

export default router;
