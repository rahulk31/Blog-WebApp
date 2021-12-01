import './post.css';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img src={post.photo} alt="" className="post-img" />}
      <div className="post-info">
        <div className="post-categories">
          {post.categories.map(c => (
            <span className="post-category">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="post-title">{post.title}</span>
        </Link>
        <hr />
        <span className="post-date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post-desc">{post.desc}</p>
    </div>
  );
}

export default Post;
