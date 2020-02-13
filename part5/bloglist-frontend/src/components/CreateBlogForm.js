import React from 'react'

const CreateBlogForm = ({
  title,
  author,
  url,
  setTitle,
  setAuthor,
  setUrl,
  handleSubmit,
}) => {
  return (
    <div>
      <h2>create new</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            title:
            <input
              type="text"
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </p>
          <p>
            author:
            <input
              type="text"
              value={author}
              onChange={({ target }) => setAuthor(target.value)}
            />
          </p>
          <p>
            url:
            <input
              type="text"
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
          </p>
          <button type="submit">create</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlogForm
