const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true,
    },
    picture: {
        type: String,
        default: "",
    },
    cover: {
        type: String,
        default: "",
    },
    about: {
        type: String,
    },
    lives: {
        type: String,
    },
    worksAt: {
        type: String,
    },
    country: {
        type: String,
    },
    relationship: {
        type: String,
        enum: ["single", "married", "in a relationship", "divorced"],
        default: "single",
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;