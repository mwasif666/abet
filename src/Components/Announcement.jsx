import React, { useEffect, useState, useRef } from "react";
import styles from "./Announcement.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AnnouncementsMarquee = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const marqueeRef = useRef(null);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.leosagitrades.com/public/blogs_list"
      );
      const sortedBlogs = (response.data.data || []).sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      setBlog(sortedBlogs);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    } finally {
      setLoading(false);
    }
  };

  function validateSlug(slug) {
    if (slug.startsWith("/")) {
      return slug.slice(1);
    } else {
      return slug;
    }
  }

  const handleBlogRedirect = (announcement) => {
    if (!announcement?.id) return;
    navigate(`/blog-details/${validateSlug(announcement.slug)}`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // 🔥 Dynamic animation speed fix
  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeWidth = marqueeRef.current.scrollWidth;
      const containerWidth = marqueeRef.current.parentElement.offsetWidth;
      const totalWidth = marqueeWidth + containerWidth;

      // har 100px ke liye 1s ka time
      const duration = totalWidth / 100;
      marqueeRef.current.style.animationDuration = `${duration}s`;
    }
  }, [blog]);

  if (loading) {
    return <div className="text-center">Loading announcements...</div>;
  }

  const announcements =
    blog.length > 0
      ? blog
      : [{ title: "No announcements found", created_at: "", id: null }];

  const duplicatedAnnouncements = [...announcements, ...announcements];

  return (
    <div className={`${styles.tickerContainer} container py-2`}>
      <div className="row align-items-center">
        <div
          className={`${styles.tickerHeader} col-lg-auto col-12 text-center`}
        >
          <span className={styles.tickerTitle}>ANNOUNCEMENTS</span>
        </div>
        <div className={`${styles.tickerMarqueeContainer} col`}>
          <div className={styles.tickerMarquee} ref={marqueeRef}>
            {duplicatedAnnouncements.map((announcement, index) => (
              <div
                key={`${announcement.id || "empty"}-${index}`}
                className={styles.tickerItem}
                onClick={() => handleBlogRedirect(announcement)}
              >
                <span className={styles.tickerPostTitle}>
                  {announcement.title}
                </span>
                {announcement.created_at && (
                  <span className={styles.tickerPostDate}>
                    {formatDate(announcement.created_at)}
                  </span>
                )}
                <span className={styles.itemSeparator}>•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsMarquee;
