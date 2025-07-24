// AnnouncementsMarquee.jsx
import React, { useEffect, useRef } from "react";
import styles from "./Announcement.module.css";
import axios from "axios";

const AnnouncementsMarquee = () => {
  const announcements = [
    {
      title: "Stocks Rise, Bitcoin Holds, Oil Falls",
      date: "February 4, 2025",
    },
    {
      title: "Inquisitive Bites: Digital Currency Revolution",
      date: "January 31, 2025",
    },
    {
      title: "Deadliest U.S. Aviation Crash in Years",
      date: "January 30, 2025",
    },
    {
      title: "Stocks Rise, Bitcoin Holds, Oil Falls",
      date: "February 4, 2025",
    },
    {
      title: "Inquisitive Bites: Digital Currency Revolution",
      date: "January 31, 2025",
    },
    {
      title: "Deadliest U.S. Aviation Crash in Years",
      date: "January 30, 2025",
    },
    {
      title: "Stocks Rise, Bitcoin Holds, Oil Falls",
      date: "February 4, 2025",
    },
    {
      title: "Inquisitive Bites: Digital Currency Revolution",
      date: "January 31, 2025",
    },
    {
      title: "Deadliest U.S. Aviation Crash in Years",
      date: "January 30, 2025",
    },
    // Add more announcements as needed
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Clone the announcements to create seamless looping
    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML += marqueeContent;

    // Adjust animation duration based on content width
    const duration = marquee.scrollWidth / 100; // Adjust divisor to control speed

    marquee.style.animationDuration = `${duration}s`;
  }, []);

  const [blog, setBlog] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchBlog = async() =>{
    setLoading(true);
    try {
       let response = await axios.get('https://api.leosagitrades.com/public/blogs_list');
        setBlog(response.data);
     } catch (error) {
       console.error("Error fetching blog data:", error);
     }finally{
      setLoading(false);
     }
  }

  useEffect(()=>{
    fetchBlog();
  },[])

  return (
    <div className={`${styles.tickerContainer} container py-2`}>
      <div className="row align-items-center">
        <div className={`${styles.tickerHeader} col-auto`}>
          <span className={styles.tickerTitle}>Announcements</span>
        </div>
        <div className={`${styles.tickerMarqueeContainer} col`}>
          <div ref={marqueeRef} className={styles.tickerMarquee}>
            {blog.map((announcement, index) => (
              <div key={index} className={styles.tickerItem}>
                <span className={styles.tickerPostTitle}>
                  {announcement.title}
                </span>
                <span className={styles.tickerPostDate}>
                  {announcement.date}
                </span>
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
