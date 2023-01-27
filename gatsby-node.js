const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      BlogQuery: allContentfulBlogPost(sort: { fields: date, order: DESC }) {
        nodes {
          slug
        }
      }
    }
  `)

  data.BlogQuery.nodes.forEach(node => {
    actions.createPage({
      path: "/blog/" + node.slug,
      component: path.resolve("./src/templates/blog-details.js"),
      context: { slug: node.slug },
    })
  })
}