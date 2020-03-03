import React, { useState } from 'react'
import PropTypes from 'prop-types'
import blogService from '../services/blogs'

const Blog = ({ user, blog, blogs, setBlogs }) => {
  const [viewDetail, setViewDetail] = useState(false)

  const handleLikeClick = () => {
    const updatedBlog = { ...blog, likes: blog.likes + 1 }
    blogService.update(updatedBlog).then(returnedUpdatedBlog => {
      setBlogs(
        blogs.map(b =>
          b.id !== returnedUpdatedBlog.id ? b : returnedUpdatedBlog
        )
      )
    })
  }

  const handleRemoveClick = () => {
    if (window.confirm(`remove blog ${blog.title} by ${blog.author}`)) {
      blogService.deletes(blog.id).then(() => {
        setBlogs(blogs.filter(b => b.id !== blog.id))
      })
    }
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
  const visibleWhenPostedByLogedInUser = {
    display: user.username === blog.user.username ? '' : 'none',
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
          <button onClick={handleLikeClick}>like</button>
        </div>
        <div>added by {blog.user.username}</div>
        <div style={visibleWhenPostedByLogedInUser}>
          <button onClick={handleRemoveClick}>remove</button>
        </div>
      </div>
    </div>
  )
}

Blog.propTypes = {
  user: PropTypes.object.isRequired,
  blog: PropTypes.object.isRequired,
  blogs: PropTypes.array.isRequired,
  setBlogs: PropTypes.func.isRequired,
}

export default Blog
