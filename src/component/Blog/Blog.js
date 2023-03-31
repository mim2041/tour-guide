import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = (props) => {
  const { handleBookmark,countTime } = props;
  const {
    id,
    title,
    author_name,
    author_img,
    publish_date,
    img_url,
    time_to_read,
  } = props.blog;

  return (
    <div className="blog">
      <div>
        <img src={img_url} alt="" />
      </div>
      <div className="blog-info">
        <div className="publish-info">
          <div>
            <img src={author_img} alt="" />
          </div>
          <div>
            <div className="author-info">
              <h5>{author_name}</h5>
              <p>
                <small>{publish_date}</small>
              </p>
            </div>
          </div>
        </div>
        <p>
          {time_to_read} min read{" "}
          <button
            onClick={() => handleBookmark(props.blog)}
            className="btn-bookmark"
          >
            <FontAwesomeIcon icon={faBookBookmark} />
          </button>
          
        </p>
      </div>
      <h2>{title}</h2>
      <div className="hashtag">
        <p>#lovetour</p>
        <p>#worldtour</p>
      </div>
      <button onClick={() => countTime(props.blog.time_to_read)} className="btn-read">
        Mark as read
      </button>
    </div>
  );
};

export default Blog;