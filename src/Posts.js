import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import './styles.css'

import './header.css'

function Posts() {
    const [blogs, setBlogs] = useState([])
    const [records, setRecords] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then(res => {
            setBlogs(res.data.products)
            setRecords(res.data.products)
        })
        .catch(err => console.log(err))
    }, [])
    const getInputData = (event) => {
        setBlogs(records.filter(r => r.title.toLowerCase().includes(event.target.value.toLowerCase())))
    }
  return (
    
    <div className='posts'>
   
   
   <div className="headerTitles">
     <span  className="headerTitleSm">Welcome Back!</span>
     <span className="headerTitleLg">BLOG</span>
   </div>
   <img
     className="headerImg"
     src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
     alt=""
   />
        <div className='search-container'>
            <input type="text" placeholder='search' 
            onInput={getInputData} className='search-input'></input>
        </div>
        <div className='blog-icon'>
            <h3>Trending Blogs</h3>
            <i className='fa fa-calculator'></i>
        </div>
        <div className='posts-container'>
            
            {blogs.map((blog, index) => (
                <Post blog={blog} key={index}/>
            ))}
        </div>
        <div className='footer'>
        <h2>Happy Blogging!</h2>
        <p>@copyright code with jasicasaxena</p>
    </div>
    </div>
  )
}

export default Posts;

