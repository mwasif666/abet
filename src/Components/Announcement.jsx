// AnnouncementsMarquee.jsx
import React, { useEffect, useRef, useState } from "react";
import styles from "./Announcement.module.css";
import axios from "axios";

const AnnouncementsMarquee = () => {
  const marqueeRef = useRef(null);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAnnouncements = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://api.leosagitrades.com/public/blogs_list"
      );

      // Handle different response formats
      let data = [];
      if (Array.isArray(response.data)) {
        data = response.data;
      } else if (response.data && Array.isArray(response.data.blogs)) {
        data = response.data.blogs;
      } else if (response.data && Array.isArray(response.data.items)) {
        data = response.data.items;
      } else if (response.data && typeof response.data === "object") {
        // If it's a single object, convert to array
        data = [response.data];
      }

      setAnnouncements(data);
    } catch (error) {
      console.error("Error fetching announcements:", error);
      setError("Failed to load announcements. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee || announcements.length === 0) return;

    // Clone the announcements to create seamless looping
    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML += marqueeContent;

    // Adjust animation duration based on content width
    const duration = marquee.scrollWidth / 100; // Adjust divisor to control speed
    marquee.style.animationDuration = `${duration}s`;
  }, [announcements]);

  if (loading) {
    return <div className="text-center py-2">Loading announcements...</div>;
  }

  if (error) {
    return <div className="text-center py-2 text-danger">{error}</div>;
  }

  return (
    <div className={`${styles.tickerContainer} container py-2`}>
      <div className="row align-items-center">
        <div className={`${styles.tickerHeader} col-auto`}>
          <span className={styles.tickerTitle}>Announcements</span>
        </div>
        <div className={`${styles.tickerMarqueeContainer} col`}>
          <div ref={marqueeRef} className={styles.tickerMarquee}>
            {announcements.length > 0 ? (
              announcements.map((item, index) => (
                <div key={index} className={styles.tickerItem}>
                  <span className={styles.tickerPostTitle}>
                    {item.title || "No title available"}
                  </span>
                  <span className={styles.tickerPostDate}>
                    {item.date || new Date().toLocaleDateString()}
                  </span>
                  <span className={styles.itemSeparator}>•</span>
                </div>
              ))
            ) : (
              <div className={styles.tickerItem}>
                <span className={styles.tickerPostTitle}>
                  No announcements available
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsMarquee;
