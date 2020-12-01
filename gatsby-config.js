require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `My Coffee`,
    siteTitleAlt: `My Coffee Marbella`,
    siteHeadline: `Healthy Kitchen & Drinks`,
    siteUrl: 'https://mycoffeemarbella.com',
    siteDescription: `My Coffee Marbella - Cafetería / Restaurante de comida saludable con una extensa variedad de platos - Desayunos, Almuerzos y Meriendas - Bowls, Tostas, Smoothies, Café, Burgers - Bebidas y comida - 
    My Coffee Marbella - Healthy food restaurant - Breakfast, Lunch y snacks - Bowls, Tostas, Smoothies, Coffee - Drinks and Food`,
    siteLanguage: 'es',
    siteImage: `/android-chrome-192x192.png`,
    author: 'Russo',
    social: [
       {
         url: 'https://www.instagram.com/mycoffeemarbella/',
         name: 'My Coffee Marbella'
       },
     ],
  },
  plugins: [ {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
      head: true,
    },
  },
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
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Brandon Grotesque"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `mycoffeemarbella`,
        access_token: process.env.ACCESS_TOKEN,
        instagram_id: process.env.BUSINESS_ID,
        // access_token: process.env.ACCESS_TOKEN,
        // instagram_id: process.env.BUSINESS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Coffee Marbella`,
        short_name: `My Coffee`,
        description: `Cafeteria - Restaurante de comida saludable`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
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
