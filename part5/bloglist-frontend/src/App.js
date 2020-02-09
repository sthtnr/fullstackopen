import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const Notification = ({ message }) => {
  const notificationStyle = {
    color: 'gold',
    fontStyle: 'bold',
    fontSize: 30,
  }
  if (message === null) {
    return null
  }
  return <div style={notificationStyle}>{message}</div>
}

const BlogCreate = ({
  title,
  author,
  url,
  setTitle,
  setAuthor,
  setUrl,
  setMessage,
}) => {
  const handleCreateNewBlog = event => {
    event.preventDefault()
    blogService.create({
      title,
      author,
      url,
    })
    setMessage(`a new blog ${title} by ${author} added✨`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
    setTitle('')
    setAuthor('')
    setUrl('')
  }
  return (
    <div>
      <h2>create new</h2>
      <div>
        <form onSubmit={handleCreateNewBlog}>
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

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    blogService.getAll().then(initialBlogs => {
      setBlogs(initialBlogs)
    })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username, password })
      blogService.setToken(user.token)

      window.localStorage.setItem('loggedBloglistUser', JSON.stringify(user))
      setUser(user)
      setMessage(`${user.name} successfuly logged in✨`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      setUsername('')
      setPassword('')
    } catch (error) {
      setMessage('wrong username or password😭')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }
  const handleLogout = event => {
    setUser(null)
    setMessage(`${user.name} successfuly logged out✨`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
    window.localStorage.clear()
    blogService.setToken(null)
  }

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification message={message} />
        <form onSubmit={handleLogin}>
          <div>
            username
            <input
              type="text"
              name="Username"
              autoComplete="username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
            <input
              type="password"
              name="Password"
              autoComplete="current-password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={message} />
      <div>
        <p>
          {user.name} logged in
          <button type="submit" onClick={handleLogout}>
            logout
          </button>
        </p>
        <BlogCreate
          title={newTitle}
          author={newAuthor}
          url={newUrl}
          setTitle={setNewTitle}
          setAuthor={setNewAuthor}
          setUrl={setNewUrl}
          setMessage={setMessage}
        />
        {blogs.map(blog => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default App
