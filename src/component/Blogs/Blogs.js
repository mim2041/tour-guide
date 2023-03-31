import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
// import Menu from '../Menu/Menu';
import "./Blogs.css";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { Toaster, toast } from "react-hot-toast";
const notify = () => toast("You Have Already Bookmarked This Blog");
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(cart);

  const countTime = (time) => {
    console.log("click", time);
    setTotalTime(parseFloat(time) + totalTime);
    localStorage.setItem("spent-time", JSON.stringify(totalTime));
  };

  const handleBookmark = (selectedBlog) => {
    let newCart = [];
    const exists = cart.find((blog) => blog.id === selectedBlog.id);
    if (!exists) {
      newCart = [...cart, selectedBlog];
      setCart(newCart);
    } else {
      notify();
      newCart = [...cart, selectedBlog];
      setCart(newCart);
    }
  };
  console.log(cart);
  return (
    <div className="blogs">
      <div>
        <Toaster></Toaster>

        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmark={handleBookmark}
            countTime={countTime}
          ></Blog>
        ))}
      </div>
      <div className="menu">
        <div className="time">
          <p>
            Spent time on read: <span>{totalTime}</span> min
          </p>
        </div>
        <div className="titles">
          <h5>Bookmarked Blogs: {cart.length}</h5>
          {cart.map((item) => (
            <p id="title">{item.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;