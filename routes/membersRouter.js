import express from "express";
import { addMember, viewAllMembers, viewMember, updateMember, deleteMember } from '../controllers/membersController.js'

const memberRouter = express.Router();

//Add a Member
memberRouter.post("/", addMember);

//View a member members/:id
memberRouter.get("/:id", viewMember);

//View all members members/
memberRouter.get("/", viewAllMembers);

//Update member record members/
memberRouter.put("/", updateMember);

//Delete a member members/:id
memberRouter.delete("/:id", deleteMember);

export default memberRouter;






