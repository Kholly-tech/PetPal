import { InlineIcon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { uploadMedia } from '../../services/functions/mediaFunction';
import SuccessCard from '../UI/InfoCard';
import { addBlog } from '../../services/functions/blogFunctions';
import PopUp from '../UI/PopUp';

const CreateBlog = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    content: '',
    medias: []
  });
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setPreviewImages([...previewImages, ...files.map(file => URL.createObjectURL(file))]);
    setFormData({...formData, medias: [...formData.medias, ...files]});
  };

  const removeImage = (index) => {
    const newPreviewImages = previewImages.filter((_, i) => i !== index);
    const newMedias = formData.medias.filter((_, i) => i !== index);
    setPreviewImages(newPreviewImages);
    setFormData({...formData, medias: newMedias});
  };

  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        setError('');
        setLoading(true);
        // API integration 

        // Upload Media to storage
        let mediaRes;
        if (formData.medias.length > 0) {
            mediaRes = await uploadMedia({files: formData.medias, path: 'blog/media/'});
        }
        // return console.log('media Res: ', mediaRes);

        const res = await addBlog({
            ...formData,
            medias: mediaRes,
        });

        if(res.status === 'success') {
            console.log('Res: ', res);
            return (
                <PopUp>
                    <SuccessCard title={res.message} success={true} description={'Your blog has been uploaded successfully!'} onClose={onClose} />
                </PopUp>
            );
        };
    } catch (error) {
        setError(error.message || 'Something went wrong. Try again!');
        console.error('Error Occured: ', error);
    } finally{
        setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary">Create New Blog</h2>
            <button onClick={onClose} className="bg-gray-500 rounded-full p-1 text-gray-100 hover:text-gray-700">
              <InlineIcon icon="mdi:close" width="24" height="24" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Title</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none   "
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Description</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none   "
                value={formData.desc}
                onChange={(e) => setFormData({...formData, desc: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Content</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none h-40   "
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Media</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg outline-none p-4">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="flex flex-col items-center cursor-pointer">
                  <InlineIcon icon="mdi:image-plus" width="24" height="24" />
                  <span className="text-gray-500">Click to upload images</span>
                </label>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                {previewImages.map((url, index) => (
                  <div key={index} className="relative">
                    <img src={url} alt="preview" className="w-full h-24 object-cover rounded-lg outline-none" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                    >
                      <InlineIcon icon="mdi:close" width="24" height="24" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-lg outline-none hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`px-6 py-2 bg-primary text-white rounded-lg outline-none hover:bg-primary/90 ${loading && 'cursor-not-allowed px-12'}`}
                disabled={loading}
              >
                {loading ? <div className='spinner' /> :'Create Blog'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
