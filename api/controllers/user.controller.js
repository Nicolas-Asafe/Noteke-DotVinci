import UserService from "../../core/services/user.service.js";
import UserRepoPostgresql from "../../db/repositories/postgresql/user.repo.ptsql.js";

const userRepository = new UserRepoPostgresql();
const userService = new UserService(userRepository);
const userController = {};

userController.createUser = async (req, res) => {
    try{ 
        const {nameuser,passwordhash,email} = req.body;
        userService.createUser(nameuser,email,passwordhash)

    }catch(err){
        res.status(400).json({
            message:err.message,
            error:err
        })
    }
}

export default userController