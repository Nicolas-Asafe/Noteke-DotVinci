import User from "../models/user.model.js";
import bcrypt from "bcrypt"

export default class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(username, email, passwordhash) {
        if (!username || !email || !passwordhash) {
            throw new Error("Missing required user data fields");
        }
        const newUser = new User(username, email, await bcrypt.hash(passwordhash, 10));
        return await this.userRepository.createUser(newUser);
    }
    getUserById(userId) {
        if (!userId) {
            throw new Error("User ID is required");
        }
        return this.userRepository.getUserById(userId);
    }
    deleteUser(userId) {
        if (!userId) {
            throw new Error("User ID is required");
        }
        return this.userRepository.deleteUser(userId);
    }
    getUserByLogin(email, password) {
        if (!email || !password) {
            throw new Error("Email and password are required");
        }
        return this.userRepository.getUserByLogin(email, password);
    }
    addOrganizationToUser(userId, organizationId) {
        if (!userId || !organizationId) {
            throw new Error("User ID and Organization ID are required");
        }
        return this.userRepository.addOrganizationToUser(userId, organizationId);
    }
}