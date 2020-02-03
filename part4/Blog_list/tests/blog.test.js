const listHelper = require('../utils/list_helper')
const helper = require('./test_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(helper.listWithOneBlog)
    expect(result).toBe(5)
  })
  test('when list has 6 blogs equals the likes of that', () => {
    const result = listHelper.totalLikes(helper.listWithSixBlogs)
    expect(result).toBe(36)
  })
})

describe('which blog has most likes', () => {
  test('list of 6 blogs', () => {
    const result = listHelper.favoriteBlog(helper.listWithSixBlogs)
    expect(result).toEqual({
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12,
    })
  })
})

describe('which author has most blog', () => {
  test('list of 6 blogs', () => {
    const result = listHelper.mostBlogs(helper.listWithSixBlogs)
    expect(result).toEqual({
      author: 'Robert C. Martin',
      blogs: 3,
    })
  })
})

describe('which author has most likes', () => {
  test('list of 6 blogs', () => {
    const result = listHelper.mostLikes(helper.listWithSixBlogs)
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 17,
    })
  })
})
