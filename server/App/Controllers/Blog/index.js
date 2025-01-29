const { addBlog, fetchBlog, deleteBlog, getAllBlogs } = require("./blogController");

module.exports = {
    addBlog,
    getAllBlogs,
    fetchBlog,
    deleteBlog,
}