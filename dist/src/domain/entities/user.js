"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const crypto_1 = require("crypto");
class User {
    name;
    email;
    password;
    id;
    perfilPhoto;
    bio;
    roles = [];
    constructor({ email, name, password, file, id, bio }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id ?? (0, crypto_1.randomUUID)();
        this.roles = ["USER"];
        this.perfilPhoto = file;
        this.bio = bio;
    }
    getUser() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            roles: this.roles,
            perfilPhoto: this.perfilPhoto,
            bio: this.bio
        };
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getId() {
        return this.id;
    }
    setName(name) {
        this.name = name;
    }
    setPassword(password) {
        this.password = password;
    }
    setEmail(email) {
        this.email = email;
    }
    getRoles() {
        return this.roles;
    }
    addNewRole(role) {
        this.roles = [...this.roles, role];
    }
}
exports.User = User;
