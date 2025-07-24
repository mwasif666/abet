import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBlogDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.leosagitrades.com/public/storage/blogs/${id}`
      );
      if (response.status === 200) {
        setBlog(response.data);
      }
    } catch (error) {
      setError("Failed to fetch blog details");
      toast.error("Failed to fetch blog details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Blog not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Blog Header */}
      <div className="mb-6">
        <span className="text-blue-600 font-medium">NEWS</span>
        <h4 className="text-gray-500 mt-1">2 min read</h4>
      </div>

      {/* Blog Title and Description */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-lg text-gray-700">{blog.short_description}</p>
      </div>

      {/* Author Info */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <span className="w-10 h-10 bg-gray-300 rounded-full mr-3"></span>
          <div>
            <h5 className="font-medium">
              by <span className="text-blue-600">ABET Global News</span>
            </h5>
            <h5 className="text-gray-500">{blog.date}</h5>
          </div>
        </div>
        <div className="flex space-x-4">
          {/* Social media icons would go here */}
        </div>
      </div>

      {/* Blog Content */}
      <div className="mb-12">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto rounded-lg mb-6"
        />
        <p className="text-lg leading-relaxed">{blog.long_description}</p>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/image"
            alt="Newsletter"
            className="w-24 h-24 mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">NewsLetter</h1>
            <h6 className="text-gray-600 mb-4">
              Keep in touch with our news & offers
            </h6>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
