import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import CreateBlogForm from './components/CreateBlogForm'
import blogService from './services/blogs'
import loginService from './services/login'
import { useField } from './hooks'

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

const App = () => {
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [message, setMessage] = useState(null)
  const [formVisible, setFormVisible] = useState(false)
  const username = useField('text')
  const password = useField('text')

  useEffect(() => {
    blogService.getAll().then(initialBlogs => {
      const copyOfInitialBlogs = initialBlogs
      setBlogs(copyOfInitialBlogs.sort((a, b) => b.likes - a.likes))
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
      const user = await loginService.login({
        username: username.value,
        password: password.value,
      })
      blogService.setToken(user.token)

      window.localStorage.setItem('loggedBloglistUser', JSON.stringify(user))
      setUser(user)
      setMessage(`${user.name} successfuly logged in✨`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      username.setValue('')
      password.setValue('')
    } catch (error) {
      setMessage('wrong username or password😭')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleLogout = () => {
    setUser(null)
    setMessage(`${user.name} successfuly logged out✨`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
    window.localStorage.clear()
    blogService.setToken(null)
  }

  const createBlogForm = () => {
    const hideWhenVisible = { display: formVisible ? 'none' : '' }
    const showWhenVisible = { display: formVisible ? '' : 'none' }

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setFormVisible(true)}>new blog</button>
        </div>
        <div style={showWhenVisible}>
          <CreateBlogForm
            title={title}
            author={author}
            url={url}
            setTitle={setTitle}
            setAuthor={setAuthor}
            setUrl={setUrl}
            handleSubmit={handleCreateNewBlog}
          />
          <button onClick={() => setFormVisible(false)}>cancel</button>
        </div>
      </div>
    )
  }

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

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification message={message} />
        <form onSubmit={handleLogin}>
          <div>
            username
            <input
              type={username.type}
              value={username.value}
              onChange={username.onChange}
            />
          </div>
          <div>
            password
            <input
              type={password.type}
              value={password.value}
              onChange={password.onChange}
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
        {createBlogForm()}
        {blogs.map(blog => (
          <Blog
            key={blog.id}
            user={user}
            blog={blog}
            blogs={blogs}
            setBlogs={setBlogs}
          />
        ))}
      </div>
    </div>
  )
}

export default App
