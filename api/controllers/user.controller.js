import UserService from "../../core/services/user.service.js";
import UserRepoPostgresql from "../../db/repositories/postgresql/user.repo.ptsql.js";
import jwt from "jsonwebtoken";

const userRepository = new UserRepoPostgresql();
const userService = new UserService(userRepository);
const userController = {};

userController.createUser = async (req, res) => {
    try{ 
        const {nameuser,passwordhash,email} = req.body;
        const user = await userService.createUser(nameuser,email,passwordhash)
        res.status(201).json({
            message:"User created successfully",
            user
        })
    }catch(err){
        res.status(400).json({
            message:err.message,
        })
    }
}
userController.login = async (req, res) => {
    try{ 
        const {email,passwordhash} = req.body;
        const user = await userService.getUserByLogin(email,passwordhash)
        const token = jwt.sign({id:user.id, email:user.email}, process.env.JWT_SECRET, {expiresIn:'1h'})
        res.status(201).json({
            message:"Login successful",
            token
        })
    }catch(err){
        res.status(400).json({
            message:err.message,
        })
    }
}

export default userController