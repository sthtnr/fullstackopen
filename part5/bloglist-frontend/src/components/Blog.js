import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog, blogs, setBlogs }) => {
  const [viewDetail, setViewDetail] = useState(false)

  const handleClick = () => {
    const updatedBlog = { ...blog, likes: blog.likes + 1 }
    blogService.update(updatedBlog).then(returnedUpdatedBlog => {
      setBlogs(
        blogs.map(b =>
          b.id !== returnedUpdatedBlog.id ? b : returnedUpdatedBlog
        )
      )
    })
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const visibleWhenClicked = {
    display: viewDetail ? '' : 'none',
  }

  return (
    <div style={blogStyle}>
      <div onClick={() => setViewDetail(!viewDetail)}>
        {blog.title} {blog.author}
      </div>
      <div style={visibleWhenClicked}>
        <div>{blog.url}</div>
        <div>
          {blog.likes} likes
          <button onClick={handleClick}>like</button>
        </div>
      </div>
    </div>
  )
}

export default Blog
