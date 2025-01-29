const { Schema, model } = require("mongoose");

const blogSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    medias: {
        type: Array,
        default: [],
    }
}, {timestamps: true});

const Blog = model('Blog', blogSchema);
module.exports = Blog;