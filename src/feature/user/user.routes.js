import express from "express"
import UserController from "./user.controller.js";



const userRoutes = express.Router();

const userController = new UserController();

userRoutes.get('/',userController.allUser);
userRoutes.post('/signUp',userController.signUp);
userRoutes.post('/signIn',userController.signIn);


export default userRoutes;