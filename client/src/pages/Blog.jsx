import React, { useEffect, useState } from 'react';
import CreateBlog from '../components/Blog/CreateBlog';
import { useSelector } from 'react-redux';
import { fetchAllBlogs } from '../services/functions/blogFunctions';
import { FullScreenLoading } from '../components/UI/Loadings';
import { timeAgo } from '../services/helpers/formatTime';

const Blog = () => {
  const {currentUser} = useSelector(state => state.auth);
  const [blogs, setBlogs] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getBlogData = async () => {
      try {
        setError('');
        setLoading(true);
        const res = await fetchAllBlogs();
        console.log(res);
        setBlogs(res.data);
      } catch (error) {
        setError(error.message || 'Something went wrong!')
      } finally {
        setLoading(false)
      }
    }

    getBlogData();
  },[currentUser]);

  // Sample blog data structure - replace with actual API calls
  // const sampleBlogs = [
  //   {
  //     _id: '1',
  //     title: 'Pet Care Tips',
  //     content: 'Essential tips for taking care of your pets...',
  //     medias: [{url: 'https://example.com/pet-care.jpg'}]
  //   },
  //   // Add more sample blogs
  // ];

  return (
    <div className="min-h-[calc(100vh-70px)] bg-bg py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-primary text-4xl font-bold">Pet Blog</h2>
          <button className={`bg-primary text-white font-medium px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors ${currentUser.role === 'admin'? 'visible' : 'hidden'}`} onClick={() => setShow(true)}>
            Add New Blog
          </button>
        </div>

        {loading? <div className='spinner border-t-red-600 w-24 h-24 border-3 mt-60 max-w-6xl mx-auto '></div> :(
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {blog?.medias[0] && (
                  <img 
                    src={blog.medias[0].url} 
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{blog.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{blog.description}</p>
                  <p className="text-gray-600 line-clamp-3 mt-2">{timeAgo(blog.createdAt)}</p>
                  <button className="mt-2 text-primary hover:text-primary/80 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {show && (
            <CreateBlog onClose={() => setShow(false)} />
        )}
      </div>
    </div>
  );
}

export default Blog;



// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
