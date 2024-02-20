import { Link } from "react-router-dom";
import BlogImage from "../constants/images/BlogImage";
import BlogPlates from "../constants/Texts/BlogPlates";

const BlogCard = () => {
  return (
    <Link className="blog-links" to="SinglePostsPage/">
      <div className="blog-card">
        <BlogImage />
        <div className="blog-details">
          <BlogPlates />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
