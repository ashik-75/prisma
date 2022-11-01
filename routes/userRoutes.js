import { Router } from "express";
import {
  addUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";

const userRoutes = Router();

userRoutes.route("/").get(getAllUsers).post(addUser);
userRoutes
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

export default userRoutes;
