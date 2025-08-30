import React from 'react'
import { blogData } from '../data/blog'
import { Link } from 'react-router'

const Blog = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl px-8 py-8'>Blogs</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 min-h-screen mb-4 '>
        {blogData.map((blog) => (
            <Link to={`/blog/${blog.slug}`}>
            <div className='border-2 border-black p-4 rounded-2xl bg-black '>
              <div className='text-white text-xl'>
                    <h2>{blog.title}</h2>
                </div>

                <img src={blog.image} alt={blog.title} width={300} height={300} className='flex items-center justify-center my-5' />
                <button className=' flex items-center justify-center rounded-3xl bg-blue-500 p-2'>Read More</button>
            </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog
