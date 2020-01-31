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
  const BlogsSortedBySumOfLikes = blogs.sort((a, b) =>
    a.likes > b.likes ? -1 : 1
  )
  const { title, author, likes } = BlogsSortedBySumOfLikes[0]
  return { title, author, likes }
}

module.exports = { dummy, totalLikes, favoriteBlog }
