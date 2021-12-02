import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './singlePost.css';

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const [post, setPost] = useState('');
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
      // console.log(res.data);
    };
    fetchPost();
  }, [path]);

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="single-post-img" />
        )}
        <h1 className="single-post-title">{post.title}</h1>
        <div className="single-post-info-wrapper">
          <span className="single-post-author-name">
            Author: <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link>
          </span>
          <span className="single-post-time">
            {new Date(post.createdAt).toDateString()}
          </span>
          <div className="icons-wrapper">
            <i className="edit-icon far fa-edit"></i>
            <i className="delete-icon fas fa-trash"></i>
          </div>
        </div>
        <p className="single-post-desc">{post.desc}</p>
      </div>
    </div>
  );
}

export default SinglePost;
