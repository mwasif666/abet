import React, { useEffect, useRef } from "react";
import styles from "./Announcement.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AnnouncementsMarquee = () => {
  const marqueeRef = useRef(null);
  const navigate = useNavigate();
  const [blog, setBlog] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML += marqueeContent;

    const duration = marquee.scrollWidth / 100;
    marquee.style.animationDuration = `${duration}s`;
  }, [blog]);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
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

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  const renderItems = blog.length > 0 ? blog : [{ title: "No Anouncement found", date: "" }];
  
  const handleBlogRedirect =(id)=>{
    navigate('')
  }

  return (
    <div className={`${styles.tickerContainer} container py-2`}>
      <div className="row align-items-center">
        <div className={`${styles.tickerHeader} col-auto`}>
          <span className={styles.tickerTitle}>Announcements</span>
        </div>
        <div className={`${styles.tickerMarqueeContainer} col`}>
          <div ref={marqueeRef} className={styles.tickerMarquee}>
            {renderItems.map((announcement, index) => (
              <div key={index} className={styles.tickerItem} onClick={()=>handleBlogRedirect(announcement.id)}>
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
