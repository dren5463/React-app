const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetTeams {
      teams: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.teams.nodes.forEach(product => {
    createPage({
      path: `/teams/${team.slug}`,
      component: path.resolve(`src/templates/team-template.js`),
      context: {
        slug: team.slug,
      },
    })
  })
}
