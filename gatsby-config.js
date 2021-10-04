/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Gatsby & React",
    // description: "some random description",
    author: "dren3424@gmail.com",
    data: ["item 1", "item 2"],
    person: { name: "Dren", age: 19 },
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3o2914b2zflq`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `QLFZu_7Nb1SDNe6ceXZsbCxIFC5ekjnvOJL1VVuTZvU`,
      },
    },
  ],
  /* Your site config here */
}
