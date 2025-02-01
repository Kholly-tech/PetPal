const { Schema, model } = require("mongoose");

const blogSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
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