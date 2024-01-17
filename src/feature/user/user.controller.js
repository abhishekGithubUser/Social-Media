import jwt from "jsonwebtoken";
import UserModel from "./user.model.js";

export default class UserController{

    allUser(req, res){
        let allUser= UserModel.getAll();
        res.status(200).send(allUser);
    }

    signUp(req,res){
        const {name ,email, password} = req.body;
        UserModel.add(name,email,password);
        res.status(201).send("User registerd Successfully");
    }

    signIn(req, res){
        const {email, password} = req.body;
        console.log(email, password)
        const result = UserModel.signIn(email,password);
        
        const token = jwt.sign({
            userId:result.id,
            email:result.email 
        },"K9vbxJmnlWhWLN0WhArE0STFvzjU27wY",
        {
            expiresIn:'1h'
        })
        res.status(200).send(token)
    }
}