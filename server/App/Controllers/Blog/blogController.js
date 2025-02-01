const Joi = require("joi");
const { resSender, deleteMedia } = require("../../Helpers");
const validator = require("../../Helpers/validationSchema");
const {Blog} = require('../../Models');

const addBlog = async (req, res) => {
    try {
        const userId = req.user._id;
        const {title, description, content} = req.body;

        const schema = Joi.object({
            title: validator.strings,
            description: validator.strings,
            content: validator.strings,
            // medias: validator.medias
        });
        const {error} = schema.validate(req.body);
        if(error) return resSender(res, 400, error.details[0].message, 'fail');

        const newBlog = new Blog({
            title,
            description,
            content,
            // medias
        });
        await newBlog.save();

        return resSender(res, 200, 'Blog added Successfully!', 'success', newBlog);
    } catch (error) {
        console.log(error);
        return resSender(res, 500, error.message, 'error');
    }
};

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        if(!blogs || blogs.length < 1) return resSender(res, 200, 'No Blog yet', 'success', blogs);

        return resSender(res, 200, 'Blogs fetched', 'success', blogs);
    } catch (error) {
        console.log(error);
        return resSender(res, 500, error.message, 'error');
    }
}

const fetchBlog = async (req, res) => {
    try {
        const userId = req.user._id;
        const {blogId} = req.params;

        const schema = Joi.object({
            blogId: validator.id,
        });
        const {error} = schema.validate(req.params);
        if(error) return resSender(res, 400, error.details[0].message, 'fail');

        let blog = await Blog.findById(blogId);
        if(!blog) return resSender(res, 404, 'Blog not Found!', 'fail');

        return resSender(res, 200, 'Blog fetched', 'success', blog);
    } catch (error) {
        console.log(error);
        return resSender(res, 500, error.message, 'error');
    }
};

const deleteBlog = async (req, res) => {
    try {
        const  userId = req.user._id;
        const {blogId} = req.params;
        const schema = Joi.object({
            blogId: validator.id,
        });
        const {error} = schema.validate(req.params);
        if(error) return resSender(res, 400, error.details[0].message, 'fail');

        const blog = await Blog.findById(blogId);
        if(!blog) return resSender(res, 404, 'Blog not Found!', 'fail');
        // console.log('Blog', blog);

        await Promise.all(blog.medias.map(async media => {
            await deleteMedia(media.public_id, media.type);
        }));

        const deletedBlog = await Blog.findByIdAndDelete(blogId);
        // console.log(deletedBlog);

        return resSender(res, 200, 'Blog deleted', 'success');
    } catch (error) {
        console.log(error);
        return resSender(res, 500, error.message, 'error');
    }
}

module.exports = {
    addBlog,
    getAllBlogs,
    fetchBlog,
    deleteBlog,
}