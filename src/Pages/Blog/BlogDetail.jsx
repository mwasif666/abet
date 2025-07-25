import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./BlogDetail.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRegClock,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({
    title: "",
    url: "",
    description: "",
    long_description: "",
    encoded_name: "",
    created_at: "",
  });
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  const getBlogDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.leosagitrades.com/public/blogs_list/${id}`
      );
      if (response?.data?.data?.[0]) {
        const blogData = response.data.data[0];
        setBlog({
          title: blogData.title || "",
          url: blogData.url || "",
          description: blogData.description || "",
          long_description:
            blogData.long_description || blogData.description || "",
          encoded_name: blogData.encoded_name || "",
          created_at: blogData.created_at || "",
        });
      }
    } catch (error) {
      toast.error("Failed to fetch blog details. Please try again.");
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogDetail();
  }, [id]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.blogDetailContainer}>
      {/* Blog Header */}
      <div className={styles.blogHeader}>
        <div className={styles.blogMeta}>
          <span className={styles.categoryTag}>NEWS</span>
          <div className={styles.readTime}>
            <FaRegClock className={styles.clockIcon} />
            <span>2 min read</span>
          </div>
        </div>

        <h1 className={styles.blogTitle}>{blog.title}</h1>

        <div
          className={styles.blogExcerpt}
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>

      {/* Author Info */}
      <div className={styles.authorSection}>
        <div className={styles.authorInfo}>
          <div className={styles.authorAvatar}>
            <img src="/images/abet-logo.png" alt="ABET Global" />
          </div>
          <div>
            <h5 className={styles.authorName}>
              by <span>ABET Global News</span>
            </h5>
            <h5 className={styles.publishDate}>
              {new Date(blog.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h5>
          </div>
        </div>

        <div className={styles.socialShare}>
          <a href="#" aria-label="Share on Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Share on Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Share on LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Blog Content */}
      <div className={styles.blogContent}>
        <img
          src={`https://api.leosagitrades.com/storage/app/public/blogs/${blog.encoded_name}`}
          alt={blog.title}
          className={styles.featuredImage}
          onError={(e) => {
            e.target.src = "/images/blog-placeholder.jpg";
          }}
        />

        <div
          className={styles.blogText}
          dangerouslySetInnerHTML={{ __html: blog.long_description }}
        />
      </div>

      {/* Newsletter */}
      <div className={styles.newsletterSection}>
        <div className={styles.newsletterCard}>
          <div className={styles.newsletterIcon}>
            <FiMail />
          </div>
          <div className={styles.newsletterContent}>
            <h2>Newsletter</h2>
            <p>Keep in touch with our news & offers</p>
            <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
