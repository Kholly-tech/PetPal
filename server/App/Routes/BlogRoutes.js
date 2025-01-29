const router = require('express').Router();
const { addBlog, fetchBlog, deleteBlog, getAllBlogs } = require('../Controllers/Blog');
const {authMiddleware, adminMiddleware} = require('../Middlewares');

router.get('/blog', authMiddleware, getAllBlogs);
router.post('/blog/add', authMiddleware, adminMiddleware, addBlog);
router.get('/blog/fetch/:blogId', authMiddleware, fetchBlog);
router.delete('/blog/delete/:blogId', authMiddleware, adminMiddleware, deleteBlog);

module.exports = router;