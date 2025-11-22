export default class User{
    constructor(username, email, passwordhash) {
        this.username = username;
        this.email = email;
        this.passwordhash = passwordhash;
        this.dev = false;
        this.studiosId = [];
        this.organizationsId = [];
    }
}