module.exports = {
  siteMetadata: {
    title: 'Sam Magee - Fullstack Devsigner'
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sam Magee - Fullstack Devsigner',
        short_name: 'Sam Magee - Fullstack Devsigner',
        start_url: '/',
        icon: 'src/images/logo.png'
      }
    }
  ]
};
