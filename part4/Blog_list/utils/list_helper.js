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

const mostBlogs = blogs => {
  // 適当な変数名が思いつかなかったのでとりあえず以下のようにしておきます🙀
  const aaa = Object.entries(_.invertBy(blogs, 'author'))

  const bbb = _.orderBy(
    aaa.map(([k, v]) => [k, v.length]),
    ([k, v]) => v,
    'desc'
  )

  return { author: bbb[0][0], blogs: bbb[0][1] }
}

const mostLikes = blogs => {
  // 適当な変数名が思いつかなかったのでとりあえず以下のようにしておきます🙀
  const aaa = Object.entries(_.invertBy(blogs, 'author'))

  const likeCounter = listOfIndex => {
    let sumOfLikes = 0
    listOfIndex.forEach(i => {
      sumOfLikes += blogs[Number(i)].likes
    })
    return sumOfLikes
  }
  const bbb = _.orderBy(
    aaa.map(([k, v]) => [k, likeCounter(v)]),
    ([k, v]) => v,
    'desc'
  )

  return { author: bbb[0][0], likes: bbb[0][1] }
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }
