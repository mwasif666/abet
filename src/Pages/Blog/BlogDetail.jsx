import React from "react";
import { toast } from "react-toastify";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const getBLogDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.leosagitrades.com/public/storage/blogs/${id}`
      );
      if (response.status === 200) {
        setBlog(response.data);
      }
    } catch (error) {
      toast.error("Failed to fetch blog details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBLogDetail();
  }, [id]);

  const tag = [];

  return (
    <>
      <div>
        <div>
          <span>NEWS</span>
          <h4>2 min read</h4>
        </div>
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.short_description}</p>
        </div>
        <div>
          <div>
            <span></span>
            <div>
              <h5>
                by <span>ABET Global News</span>
              </h5>
              <h5>{blog.date}</h5>
            </div>
          </div>
          <div>{/* social media icons */}</div>
        </div>
        <div>
          <img src={blog.iamge} alt={blog.title} />
          <p>{blog.long_description}</p>
        </div>
        <div>
          <div>
            <img src="/image" alt="image" />
            <div>
              <h1>NewsLetter</h1>
              <h6>Keep in touch with our news & offers</h6>
              <div>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
