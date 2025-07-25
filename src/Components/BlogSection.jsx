import React, { useEffect } from "react";
import styles from "./BlogSection.module.css";
import axios from "axios";

const BlogSection = () => {

  const [blog, setBlog] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        "https://api.leosagitrades.com/public/blogs_list"
      );
      setBlog(response.data.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

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
            blog?.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 mb-4">
                <div className={`${styles.blogCard} h-100`}>
                  <a href={post.link} className={styles.blogLink}>
                    <div className={styles.blogImageContainer}>
                      <img
                        src={`https://api.leosagitrades.com/public/storage/blogs/${post.original_name}`}
                        alt={post.title}
                        className={`${styles.blogImage} img-fluid`}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.blogContent}>
                      <span
                        className={`${styles.blogCategory} ${
                          post.category === "News"
                            ? styles.newsCategory
                            : styles.blogCategory
                        }`}
                      >
                        {post.category}
                      </span>
                      <h4 className={styles.blogTitle}>{post.title}</h4>

                      <p
                        className={styles.blogExcerpt}
                        dangerouslySetInnerHTML={{ __html: post.description.slice(0,200) + '...' }}
                      ></p>
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

        <div className="text-center mt-4">
          <a className={`${styles.readMoreBtn} btn btn-primary`}>Read More</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
