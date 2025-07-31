import React from 'react'
import { blogData } from '../data/blog'
import { Link } from 'react-router'

const Blog = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {blogData.map((blog) => (
            <Link to={`/blog/${blog.slug}`}>
            <div className='border-2 border-black p-4 rounded-2xl'>
                <img src={blog.image} alt={blog.title} width={300} height={300} />
                <div>
                    <h2>{blog.title}</h2>
                </div>
            </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog
