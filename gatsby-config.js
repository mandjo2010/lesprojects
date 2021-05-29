require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-datocms`,
      
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        
        
      },
      resolve: `gatsby-plugin-gatsby-cloud`,
      
      // options: {
      //   headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
      //   allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
      //   mergeSecurityHeaders: true, // boolean to turn off the default security headers
      //   mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
      //   mergeCachingHeaders: true, // boolean to turn off the default caching headers
      //   transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
      //   generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
          
      // },
    },
  ],
}
