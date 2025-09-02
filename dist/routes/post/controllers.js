"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../models/User"));
const Post_1 = __importDefault(require("../../models/Post"));
const createPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        const user = await User_1.default.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        const post = new Post_1.default({ title, content, author: user._id });
        await post.save();
        res.status(201).json(post);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating post", error });
    }
};
exports.default = { createPost };
