import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
export default class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async registerUser(userData) {
        if (!userData.username || !userData.email || !userData.password) {
            throw new Error("Missing required user data fields");
        }
        const newUser = new User(userData.username, userData.email, await bcrypt.hash(userData.password, 10));
        return await this.userRepository.createUser(newUser);
    }    
    async getUserProfile(userId) {
        if (!userId) {
            throw new Error("User ID is required");
        }
        return await this.userRepository.getUserById(userId);
    }
    async deleteUserAccount(userId,passwordhash) {
        if (!userId) {
            throw new Error("User ID is required");
        }
        return await this.userRepository.deleteUser(userId,passwordhash);
    }
    async getUserByLogin(email,password) {
        if (!email || !password) {
            throw new Error("Email is required");
        }
        return await this.userRepository.getUserByEmail(email,password);
    }
}