import React, { useEffect, useState } from "react";
import styles from "./BlogSection.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        "https://api.leosagitrades.com/public/blogs_list"
      );
      // Sort posts by date (newest first)
      const sortedBlogs = (response.data.data || []).sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      setBlog(sortedBlogs);
      setAllPostsLoaded(sortedBlogs.length <= 6);
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setBlog([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const handleBlogRedirect = (post) => {
    navigate(`/blog-details/${post?.id}/${post?.slug}`);
  };

  const loadMorePosts = () => {
    const newVisiblePosts = visiblePosts + 6;
    setVisiblePosts(newVisiblePosts);
    if (newVisiblePosts >= blog.length) {
      setAllPostsLoaded(true);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className={`${styles.blogSection} py-5`}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6">
            <h2 className={styles.sectionTitle}>BLOGS & NEWS</h2>
            <h4 className={styles.sectionSubtitle}>Research & Analysis</h4>
          </div>
          <div className="col-md-6">
            <p className={styles.sectionDescription}>
              Forex, Stocks, Metals & Commodities, FX Indices, and Indices
              market analyses that can guide your investment strategies;
              research reports and expert opinions.
            </p>
          </div>
        </div>

        <div className="row">
          {loading ? (
            <div className="text-center mt-4">
              <h4>Loading...</h4>
            </div>
          ) : blog.length > 0 ? (
            blog.slice(0, visiblePosts).map((post) => (
              <div
                key={post.id}
                className="col-lg-4 col-md-6 mb-4"
                onClick={() => handleBlogRedirect(post)}
              >
                <div className={`${styles.blogCard} h-100`}>
                  <a href={post.link} className={styles.blogLink}>
                    <div className={styles.blogImageContainer}>
                      <img
                        src={`https://api.leosagitrades.com/storage/app/public/blogs/${post.encoded_name}`}
                        alt={post.title}
                        className={`${styles.blogImage} img-fluid`}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.blogContent}>
                      <span className={styles.blogCategory}>
                        {formatDate(post.created_at)}
                      </span>
                      <h4 className={styles.blogTitle}>
                        {post.title || "Untitled Blog"}
                      </h4>

                      <p className={styles.blogExcerpt}>
                        {post.short_description || "No description available"}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-4">
              <h4>No Blog Found!</h4>
            </div>
          )}
        </div>

        {!loading && blog.length > 0 && !allPostsLoaded && (
          <div className="text-center mt-4">
            <button
              className={`${styles.readMoreBtn} btn btn-primary`}
              onClick={loadMorePosts}
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
