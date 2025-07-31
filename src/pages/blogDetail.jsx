import React from 'react'
import { findBlogBySlug } from '../data/blog'
import { useParams } from 'react-router'

const BlogDetail = () => {
    const params = useParams();
    const slug = params.slug;
    const blog = findBlogBySlug(slug)

  return (
     <div className="max-w-4xl mx-auto px-4 py-8">
      <img 
        src={blog.image} 
        alt={blog.title} 
        className="w-full h-auto rounded-xl mb-6 shadow-md"
      />
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{blog.title}</h1>
      <div 
        className="prose prose-lg max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  )
}

export default BlogDetail
