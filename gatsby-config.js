const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: true,
            },
          },
          {
            resolve: 'gatsby-transformer-remark',
            options: {
              plugins: [
                'gatsby-remark-static-images'
              ]
            }
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
  ],
};
