import React from "react";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "China Vows to Fight 'Any Type of War' with US",
      excerpt:
        "China Vows to Fight 'Any Type of War' with U.S. Amid Escalating Tensions China vows",
      imageUrl:
        "https://abet.leosagitrades.com/wp-content/uploads/2025/03/CHINA-US.-02.png",
      category: "News",
      link: "#",
    },
    {
      id: 2,
      title: "Copper Stocks Surge Amid Tariff Tensions!",
      excerpt:
        "Introduction Copper, often referred to as 'Dr. Copper' for its ability to predict economic trends,",
      imageUrl:
        "https://abet.leosagitrades.com/wp-content/uploads/2025/03/COOPERSTOCK.png",
      category: "Blog",
      link: "#",
    },
    {
      id: 3,
      title: "Japanese Bond Yields Surge to Near 16-Year Highs",
      excerpt:
        "Japanese Bond Yields Surge to Near 16-Year Highs Amid Global Sell-Off. Japanese bond yields surge,",
      imageUrl:
        "https://abet.leosagitrades.com/wp-content/uploads/2025/03/japan-BOND.png",
      category: "News",
      link: "#",
    },
    {
      id: 4,
      title: "Bitcoin Rises Toward $90,000",
      excerpt:
        "Bitcoin Rises Toward $90,000 as Cryptocurrency Recovers to Earlier Losses from the Trade War Sell-Off.",
      imageUrl:
        "https://abet.leosagitrades.com/wp-content/uploads/2025/03/btc-rise.png",
      category: "News",
      link: "#",
    },
    {
      id: 5,
      title: "Markets in Flux: Stocks Up, Bitcoin Steady, Oil Slips",
      excerpt:
        "Global financial markets are navigating a landscape marked by mixed performances across various sectors, influenced",
      imageUrl:
        "https://abet.leosagitrades.com/wp-content/uploads/2025/02/MARKET-IN-FLEX.png",
      category: "News",
      link: "#",
    },
    {
      id: 6,
      title: "Stocks Rise, Bitcoin Holds, Oil Falls",
      excerpt:
        "Global financial markets are navigating a landscape marked by mixed performances across various sectors, influenced",
      imageUrl:
        "https://abet.leosagitrades.com/wp-content/uploads/2025/02/BTC-OIL.png",
      category: "News",
      link: "#",
    },
  ];

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
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6 mb-4">
              <div className={`${styles.blogCard} h-100`}>
                <a href={post.link} className={styles.blogLink}>
                  <div className={styles.blogImageContainer}>
                    <img
                      src={post.imageUrl}
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
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a className={`${styles.readMoreBtn} btn btn-primary`}>Read More</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
