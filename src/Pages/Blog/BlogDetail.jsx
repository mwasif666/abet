import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  const getBLogDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.leosagitrades.com/public/blogs_list/${id}`
      );
      if (response) {
        setBlog(response.data.data[0]);
      }
    } catch (error) {
      toast.error("Failed to fetch blog details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBLogDetail();
  }, [id]);

  const tag = [];

  if (loading) {
    return (
      <div className="text-center mt-4">
        <h6>Loading...</h6>
      </div>
    );
  }

  return (
    <>
      <div>
        <div>
          <span>NEWS</span>
          <h4>2 min read</h4>
        </div>
        <div>
          <h1>{blog?.title}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: blog.description.slice(0, 200) + "...",
            }}
          ></p>
        </div>
        <div>
          <div>
            <span></span>
            <div>
              <h5>
                by <span>ABET Global News</span>
              </h5>
              <h5>{blog?.date}</h5>
            </div>
          </div>
          <div>{/* social media icons */}</div>
        </div>
        <div>
          <img src={`https://api.leosagitrades.com/public/storage/blogs/${blog.original_name}`} alt={blog.title} />
          <p
           
            dangerouslySetInnerHTML={{ __html: blog.description }}
          ></p>
        </div>
        <div>
          <div>
            <img src="/image" alt="image" />
            <div>
              <h1>NewsLetter</h1>
              <h6>Keep in touch with our news & offers</h6>
              <div>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
