import React from 'react'

const CreateBlogForm = ({
  title,
  author,
  url,
  handleSubmit,
  removeSetValue,
}) => {
  return (
    <div>
      <h2>create new</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            title:
            <input {...removeSetValue(title)} />
          </p>
          <p>
            author:
            <input {...removeSetValue(author)} />
          </p>
          <p>
            url:
            <input {...removeSetValue(url)} />
          </p>
          <button type="submit">create</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlogForm
