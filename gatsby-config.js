module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Notes",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "Subjects",
        path: "./subjects/",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          "gatsby-remark-images",
          "gatsby-remark-katex"
        ]
      }
    },
    "@chakra-ui/gatsby-plugin"
  ],
};
