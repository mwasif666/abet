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
      // Sort by created_at date (newest first)
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

  const handleBlogRedirect = (id) => {
    if (!id) return;
    navigate(`/blog-details/${id}`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return <div className="text-center">Loading announcements...</div>;
  }

  const announcements =
    blog.length > 0
      ? blog
      : [{ title: "No announcements found", created_at: "", id: null }];

  // Duplicate announcements to create seamless loop
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
                onClick={() => handleBlogRedirect(announcement.id)}
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
