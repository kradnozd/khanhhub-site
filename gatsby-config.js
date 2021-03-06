module.exports = {
  siteMetadata: {
    title: `Khanhhub`,
    description: `meme`,
    author: `@krad`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Khanhhub`,
        short_name: `khanhhub`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#ffa500`,
        display: `standalone`,
        icon: `src/images/pepeK.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
