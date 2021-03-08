module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fascinate', 'cursive'],
        },
      },
    },
  ],
}
