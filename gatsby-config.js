const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}


module.exports = {

  plugins: [
    "gatsby-plugin-typescript",
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAfmjcK0SsuChX_cYRwCJq45tsHCmctq28",
          authDomain: "blog-e7108.firebaseapp.com",
          projectId: "blog-e7108",
          storageBucket: "blog-e7108.appspot.com",
          messagingSenderId: "538281889243",
          appId: "1:538281889243:web:96123a606aa17fb559ebfe"
       }
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/assets`,
    //     name: `assets`,
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 630,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-responsive-iframe`,
    //         options: {
    //           wrapperStyle: `margin-bottom: 1.0725rem`,
    //         },
    //       },
          {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: 'c0m26swxsm4n',              
              accessToken: 'qKgBgIMUdegqZSZ2IqRI8lD2KDcQkECdl1PQA0qBqsw'
            },
          },
          '@contentful/gatsby-transformer-contentful-richtext',
    //       `gatsby-remark-prismjs`,
    //       `gatsby-remark-copy-linked-files`,
    //       `gatsby-remark-smartypants`,
    //     ],
    //   },
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    // `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Gatsby Starter Blog`,
    //     short_name: `GatsbyJS`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `content/assets/gatsby-icon.png`,
    //   },
    // },
    // `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    
  ],
}
