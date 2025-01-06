import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    isGroup: Boolean
});

export const Users = mongoose.model('Users',chatSchema);