import React, { useState } from 'react'
const Blog = ({ blog }) => {
  const [viewDetail, setViewDetail] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  if (viewDetail) {
    return (
      <div style={blogStyle}>
        <div onClick={() => setViewDetail(!viewDetail)}>
          <div>
            {blog.title} {blog.author}
          </div>
          <div>{blog.url}</div>
          <div>
            {blog.likes} likes
            <button>like</button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div style={blogStyle}>
      <div onClick={() => setViewDetail(!viewDetail)}>
        {blog.title} {blog.author}
      </div>
    </div>
  )
}

export default Blog
