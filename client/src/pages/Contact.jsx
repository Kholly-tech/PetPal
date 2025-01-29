import React, { useState } from 'react';
import PopUp from '../components/UI/PopUp';
import InfoCard from "../components/UI/InfoCard";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading,setLoading] = useState(false);
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: 'general',
      message: ''
  });

  const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData(prev => ({
          ...prev,
          [id]: value
      }));
  };

  const handleSubmit = (e) => {
    try {
        setLoading(true);
      e.preventDefault();
    //   console.log('Form Data:', formData);
      // Add your API call here
      setShowPopup(true);
    } catch (error) {
        
    }finally{
        setLoading(false);
    }    
  };

  return (
      <div className='bg-bg min-h-[calc(100vh-70px)]'>
          <div className="max-w-4xl mx-auto bg-bg px-4 py-8">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                  Get in Touch with PetPal
              </h1>
              <p className="text-center text-gray-600 mb-8">
                  We'd love to hear from you! Send us a message and we'll respond as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <div className="mb-6">
                      <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                          Name
                      </label>
                      <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                      />
                  </div>
                  <div className="mb-6">
                      <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                          Email
                      </label>
                      <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                      />
                  </div>
                  <div className="mb-6">
                      <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-2">
                          Subject
                      </label>
                      <select
                          id="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                          <option value="general">General Inquiry</option>
                          <option value="support">Pet Support</option>
                          <option value="adoption">Adoption Questions</option>
                          <option value="other">Other</option>
                      </select>
                  </div>
                  <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                          Message
                      </label>
                      <textarea
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                      />
                  </div>
                  <button
                      type="submit"
                      className="w-full bg-primary text-secondary py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                  >
                      Send Message
                  </button>
              </form>
              <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Other Ways to Reach Us</h2>
                  <div className="space-y-2 text-gray-600">
                      <p>📞 Phone: (+234) 907 688 9241</p>
                      <p>📧 Email: kolawoleakintayok@gmail.com</p>
                      <p>📍 Address: 123 Pet Street, Pawsome City, PC 12345</p>
                  </div>
              </div>

              {showPopup && (
                  <PopUp>
                      <InfoCard success={true} title={'Success!'} description={'Your Message has been sent successfully!'} loading={loading} onClose={() => {setShowPopup(false)
                        setFormData({
                            name: '',
                            email: '',
                            subject: 'general',
                            message: '',
                        });
                      }} />
                  </PopUp>
              )}
          </div>
      </div>
  );
};

export default Contact;