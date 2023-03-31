import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const {id, title, author_name, author_img, publish_date, img_url, time_to_read} = props.blog;
    return (
        <div className='blog'>
            <div>
                <img src={img_url} alt="" />
            </div>
            <div className='blog-info'>
                <div>
                    <img src={author_img} alt="" />
                </div>
                <div>
                    <div>
                        <h5>{author_name}</h5>
                        <p><small>{publish_date}</small></p>
                    </div>
                    <p>{time_to_read} min read <FontAwesomeIcon icon={faBookBookmark} /></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;