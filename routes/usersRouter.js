import express from "express";
import { addUser, viewAllUsers, viewUser, signIn } from '../controllers/usersController.js'

const usersRouter = express.Router();

//Add a user - Sign up
usersRouter.post("/", addUser);

//Add a user - Sign in
usersRouter.post("/", signIn);

//View a user users/:id
usersRouter.get("/:id", viewUser);

//View all users users/
usersRouter.get("/", viewAllUsers);


export default usersRouter;






