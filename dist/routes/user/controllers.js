"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../models/User"));
const createUser = async (req, res) => {
    try {
        const { name, lastName, email, isActive } = req.body;
        const user = new User_1.default({
            name,
            lastName,
            isActive,
            email
        });
        await user.save();
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({
            message: "Error creating user", error
        });
    }
};
exports.default = { createUser };
