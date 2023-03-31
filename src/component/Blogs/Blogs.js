import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
// import Menu from '../Menu/Menu';
import './Blogs.css'
import { getStoredCart } from '../../utilities/fakedb';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    // const [time, setTime] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    const timeCalculation = (blogs) => {
        console.log('clicked')
    }

    const bookmarked = (blog) => {
        // console.log(blog);
        const newCart = [...cart, blog]
        setCart(newCart);
    }

    useEffect(() => {
        const storedCart = getStoredCart;
        const savedCart = [];
        for (const id in storedCart) {
          const addedProduct = blogs.find((blog) => blog.id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      }, [blogs]);

    
    return (
        <div className='blogs'>
            <div>
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    bookmarked={bookmarked}
                    ></Blog>)
                }
            </div>
            <div className='menu'>
                <div className='time'>
                        <p>Spent time on read: <span>0</span> min</p>
                    </div>
                    <div className='titles'>
                        <h5>Bookmarked Blogs: {cart.length}</h5>
                        <p id='title'>

                        </p>
                    </div>
            </div>
        </div>
    );
};

export default Blogs;