import React, { useState } from 'react';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      category: selectedValue,
      content
    });
    // Here you can send data to backend using fetch/axios
  };

  return (
    <div className="flex flex-col justify-center items-center pt-[7vw] w-full">
      <p className="text-4xl font-bold font-sans mb-6">Share Your Knowledge</p>

      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-4 w-[80%] max-w-2xl bg-white p-6 rounded-lg shadow-lg"
      >
        {/* Blog Title */}
        <input
          type="text"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Category Dropdown */}
        <select
          value={selectedValue}
          onChange={handleChange}
          className="border cursor:pointer border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">----- Select Category -----</option>
          <option value="aAdvanced-manufacturing">Advanced manufacturing</option>
          <option value="Artificial-Intelligence">Artificial Intelligence</option>
          <option value="Advanced-materials">Advanced materials</option>
          <option value="Biotechnology">Biotechnology</option>
          <option value="Blockchain-technology">Blockchain technology</option>
          <option value="Cloud-computing">Cloud computing</option>
          <option value="Computer-vision">Computer vision</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Data-science">Data science</option>
          <option value="Extended-reality">Extended reality</option>
          <option value="Generative-AI">Generative AI</option>
          <option value="Green-energy">Green energy</option>
          <option value="Internet-of-things">Internet of things</option>
          <option value="Low-code-No-code">Low code / No code</option>
          <option value="Robotics-and-automation">Robotics and automation</option>
          <option value="Web-development">Web development</option>
        </select>

        {/* Blog Content */}
        <textarea
          placeholder="Write your blog content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Submit Button */}
        <button 
          type="submit" 
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;