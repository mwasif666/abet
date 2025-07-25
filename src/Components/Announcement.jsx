import React, { useEffect, useState } from "react";
import styles from "./Announcement.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AnnouncementsMarquee = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.leosagitrades.com/public/blogs_list"
      );
      setBlog(response.data.data || []);
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

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  const announcements = blog.length > 0
    ? blog
    : [{ title: "No Announcement found", date: "", id: null }];

  const duplicatedAnnouncements = new Array(10).fill(announcements).flat();

  return (
    <div className={`${styles.tickerContainer} container py-2`}>
      <div className="row align-items-center">
        <div className={`${styles.tickerHeader} col-auto`}>
          <span className={styles.tickerTitle}>Announcements</span>
        </div>
        <div className={`${styles.tickerMarqueeContainer} col`}>
          <div className={styles.tickerMarquee}>
            {duplicatedAnnouncements.map((announcement, index) => (
              <div
                key={index}
                className={styles.tickerItem}
                onClick={() => handleBlogRedirect(announcement.id)}
              >
                <span className={styles.tickerPostTitle}>
                  {announcement.title}
                </span>
                {announcement.date && (
                  <span className={styles.tickerPostDate}>
                    {announcement.date}
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
