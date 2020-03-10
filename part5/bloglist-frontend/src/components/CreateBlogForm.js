import React from 'react'

const CreateBlogForm = ({ title, author, url, handleSubmit }) => {
  return (
    <div>
      <h2>create new</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            title:
            <input
              type={title.type}
              value={title.value}
              onChange={title.onChange}
            />
          </p>
          <p>
            author:
            <input
              type={author.type}
              value={author.value}
              onChange={author.onChange}
            />
          </p>
          <p>
            url:
            <input type={url.type} value={url.value} onChange={url.onChange} />
          </p>
          <button type="submit">create</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlogForm
