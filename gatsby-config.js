require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `MyCoffee`,
    siteTitleAlt: `MyCoffeeMarbella`,
    siteHeadline: `Healthy Kitchen & Drinks`,
    siteUrl: 'https://mycoffeemarbella.com',
    siteDescription: `Cafeteria - Restaurante de comida saludable`,
    siteLanguage: 'es',
    siteImage: `/android-chrome-192x192.png`,
    author: 'Russo',
    social: [
       {
         url: 'https://www.instagram.com/mycoffeemarbella/',
         name: 'MyCoffeeMarbella'
       },
     ],
  },
  plugins: [ 
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `Menus`, slug: `/projects` },
          { name: `Instagram`, slug: `/instagram` },
          { name: `Contacto`, slug: `/contact` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-D7LGZRTSQN",
      },
    },
    // {
    //   resolve: `gatsby-theme-contact`,
    //   options: {
    //     contactPath: '/contact',
    //     successPath: '/thanks'
    //   },
    // },
    {
      resolve: `gatsby-theme-contact`,
        options: {
         contactPath: '/contacto',
         successPath: '/thanks'
       },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `mycoffeemarbella`,
        access_token: "EAAOqPY7l1RABAM0VAxDjCjRPkhA7cvrOz3TDOCOa8kASvCvWH0QMLykG0Eh6APd8mDEyjZAS9sdLf6MXHrZAQgFBwGiaLxhN7I742a1vknLq6UK9qrfvq65GyHu8eLUwg4QTb37PbPtsbl5vtYWEgWoEeblHCbkqBj5sYa2DTqxdabTJap",
        instagram_id: "17841442932890551",
        // access_token: process.env.ACCESS_TOKEN,
        // instagram_id: process.env.BUSINESS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MyCoffeeMarbella`,
        short_name: `MyCoffee`,
        description: `Cafeteria / Restaurante de comida saludable`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#9bcfc8`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
