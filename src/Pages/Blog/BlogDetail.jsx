import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRegClock,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import axios from "axios";
import styles from "../../style/BlogDetail.module.css";
import Logo from "../../assets/logo.png";
const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({
    title: "",
    url: "",
    short_description: "",
    long_description: "",
    encoded_name: "",
    created_at: "",
    image_alt_text: "",
    meta_title: "",
    meta_description: "",
  });
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  const getBlogDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.leosagitrades.com/public/blogs_list/${slug}`
      );
      if (response?.data?.data?.[0]) {
        const blogData = response.data.data[0];
        setBlog({
          title: blogData.title || "",
          url: blogData.url || "",
          short_description: blogData.short_description || "",
          long_description:
            blogData.long_description || blogData.short_description || "",
          encoded_name: blogData.encoded_name || "",
          created_at: blogData.created_at || "",
          image_alt_text: blogData.image_alt_text || "",
          meta_title: blogData.meta_title || "",
          meta_description: blogData.meta_description || "",
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
  }, [slug]);

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
    <>
      <Helmet>
        <title>{blog.meta_title || blog.title}</title>
        <meta
          name="description"
          content={blog.meta_description || blog.short_description}
        />

        <meta property="og:title" content={blog.meta_title || blog.title} />
        <meta
          property="og:description"
          content={blog.meta_description || blog.short_description}
        />
        <meta
          property="og:image"
          content={`https://api.leosagitrades.com/storage/app/public/blogs/${blog.encoded_name}`}
        />
        <meta property="og:url" content={`https://yourdomain.com/blog/${slug}`} />
        <meta property="og:type" content="article" />

        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.meta_title || blog.title} />
        <meta
          name="twitter:description"
          content={blog.meta_description || blog.short_description}
        />
        <meta
          name="twitter:image"
          content={`https://api.leosagitrades.com/storage/app/public/blogs/${blog.encoded_name}`}
        />
      </Helmet>
      <article className={styles.blogDetailContainer}>
   
        <div className={styles.blogHeader}>
          <div className={styles.blogMeta}>
            <span className={styles.categoryTag}>NEWS</span>
            <div className={styles.readTime}>
              <FaRegClock className={styles.clockIcon} />
              <span>2 min read</span>
            </div>
          </div>

          <h1 className={styles.blogTitle}>{blog.title}</h1>

          <div className={styles.blogExcerpt}>{blog.short_description}</div>
        </div>

        <div className={styles.authorSection}>
          <div className={styles.authorInfo}>
            <div className={styles.authorAvatar}>
              <img src={Logo} alt="ABET Global" />
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

        <div className={styles.blogContent}>
          <img
            src={`https://api.leosagitrades.com/storage/app/public/blogs/${blog.encoded_name}`}
            alt={blog.image_alt_text}
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
        {/* <div className={styles.newsletterSection}>
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
      </div> */}
      </article>
    </>
  );
};

export default BlogDetail;
