module.exports = {
  siteMetadata: {
    title: "portfolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer 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`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/illustrations/icon.png",
      },
    },
  ],
};
