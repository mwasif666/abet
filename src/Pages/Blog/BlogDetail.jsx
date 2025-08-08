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
import Badge from "react-bootstrap/Badge";
import { Row } from "react-bootstrap";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({
    title: "",
    url: "",
    category:"",
    short_description: "",
    long_description: "",
    encoded_name: "",
    created_at: "",
    image_alt_text: "",
    meta_title: "",
    meta_description: "",
    id: "",
    comments: [],
    tags: [],
    sub_category: ""
  });
  // const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);
  const [commentsLoading, setCommentsLoading] = useState(false);

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
          id: blogData.id || "",
          comments: blogData.comments || [],
          tags: blogData.tags || [],
          sub_category: blogData.sub_category || "",
          category:blogData.category || "",

        });
      }
    } catch (error) {
      toast.error("Failed to fetch blog details. Please try again.");
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  const postComment = async (blogId, commentText) => {
    try {
      setCommentLoading(true);
      setCommentsLoading(true);
      const response = await axios.post(
        "https://api.leosagitrades.com/public/blog_comments",
        {
          blog_id: blogId,
          comment: commentText,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        toast.success("Comment submitted successfully!");
        const newComment = response.data?.data || { comment: commentText };
        setBlog((prevBlog) => ({
          ...prevBlog,
          comments: [...(prevBlog.comments || []), newComment],
        }));
        setNewComment("");
        return true;
      }
    } catch (error) {
      console.error("Comment submission error:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to submit comment. Please try again."
      );
      return false;
    } finally {
      setCommentLoading(false);
      setCommentsLoading(false);
    }
  };

  useEffect(() => {
    getBlogDetail();
  }, [slug]);

  // const handleSubscribe = (e) => {
  //   e.preventDefault();
  //   toast.success("Thanks for subscribing!");
  //   setEmail("");
  // };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) {
      toast.error("Please enter a comment");
      return;
    }

    await postComment(blog.id, newComment);
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
        <meta
          property="og:url"
          content={`https://yourdomain.com/blog/${slug}`}
        />
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
            <span className={styles.categoryTag}>{blog.category.toLocaleUpperCase()}</span>
            <div className={styles.readTime}>
              <FaRegClock className={styles.clockIcon} />
              <span>2 min read</span>
            </div>
          </div>
          <h5 >{blog.sub_category}</h5>

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

        <div className="d-flex flex-wrap align-items-center">
          {blog?.tags?.length > 0 &&
            blog.tags.map((item) => (
              <h6 key={item.id}>
                <Badge bg="secondary" className="mx-1 py-2 px-2">
                  {item.tag}
                </Badge>
              </h6>
            ))}
        </div>

        <div className={styles.commentSection}>
          <h3 className={styles.commentTitle}>
            Comments ({blog?.comments?.length || 0})
          </h3>

          <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
            <h4 className={styles.commentFormTitle}>Leave a Comment</h4>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here..."
              className={styles.commentInput}
              rows="5"
              required
            />
            <button
              type="submit"
              className={styles.commentSubmit}
              disabled={commentLoading}
            >
              {commentLoading ? "Submitting..." : "Submit Comment"}
            </button>
          </form>

          {commentsLoading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner}></div>
            </div>
          ) : blog.comments.length > 0 ? (
            <div className={styles.commentList}>
              {blog.comments.slice(0, 8).map((comment) => (
                <div key={comment.id} className={styles.commentItem}>
                  <div className={styles.commentHeader}>
                    <span className={styles.commentAuthor}>Anonymous</span>
                    <span className={styles.commentDate}>
                      {new Date(comment.created_at).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>
                  <div className={styles.commentText}>{comment.comment}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.noComments}>
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </article>
    </>
  );
};

export default BlogDetail;
