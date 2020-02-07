const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')

jest.setTimeout(30000)

beforeEach(async () => {
  await Blog.deleteMany({})

  const blogObjects = helper.initialBlogs.map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

afterAll(() => {
  mongoose.connection.close()
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body.length).toBe(helper.initialBlogs.length)
})

test('blog has unique identifier named id', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body[0].id).toBeDefined()
})

test('a valid note can be added', async () => {
  const newBlog = {
    title: 'hogehoge',
    author: 'fugafuga',
    url: 'https://example.com/',
    likes: 114514,
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1)

  const titles = blogsAtEnd.map(n => n.title)
  expect(titles).toContain('hogehoge')
})

test('if likes property is missing, it will default to the value 0', async () => {
  const missingLikesBlog = {
    title: 'hoge',
    author: 'fuga',
    url: 'https://example.com/',
  }
  const response = await api.post('/api/blogs').send(missingLikesBlog)

  expect(response.body.likes).toBe(0)
})

test('if title and url property is missing, return 400', async () => {
  const missingTitleAndUrlBlog = {
    author: 'piyo',
    likes: 666,
  }

  await api
    .post('/api/blogs')
    .send(missingTitleAndUrlBlog)
    .expect(400)
})

test('invalid user are not created, if so return 400', async () => {
  const missingUsernameUser = { name: 'bbb', password: 'ccc' }
  const missingPasswordUser = { username: 'aaa', name: 'bbb' }
  const invalidPasswordLengthUser = {
    username: 'aaa',
    name: 'bbb',
    password: 'c',
  }

  await api
    .post('/api/blogs')
    .send(missingUsernameUser)
    .expect(400)

  await api
    .post('/api/blogs')
    .send(missingPasswordUser)
    .expect(400)

  await api
    .post('/api/blogs')
    .send(invalidPasswordLengthUser)
    .expect(400)
})
