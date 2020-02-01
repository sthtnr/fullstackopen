const _ = require('lodash')

const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }

  return blogs.reduce(reducer, 0)
}

const favoriteBlog = blogs => {
  const MostLikedBlog = _.orderBy(blogs, 'likes', 'desc')[0]
  const { title, author, likes } = MostLikedBlog
  return { title, author, likes }
}

module.exports = { dummy, totalLikes, favoriteBlog }
