require("dotenv").config({
  path: `.env`,
});
module.exports = {
  siteMetadata: {
    title: "portfolio",
  },
  pathPrefix: "/portfolio",
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.BEARER_TOKEN}`,
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
