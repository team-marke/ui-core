const now = new Date();
const livePosts = (post) => post.date <= now && !post.data.draft;

module.exports = (collection) => {
  return [...collection.getFilteredByGlob('./src/data/pages/blog/posts/*.md').filter(livePosts)].reverse();
}