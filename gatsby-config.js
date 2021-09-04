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
          ignore: ['/ds/images/*', 'images', '*/images', '*/*/images', '**/*\.png', '/ds/images', '**/images']
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: ['.mdx'],
        gatsbyRemarkPlugins: ["gatsby-remark-images"],
        remarkPlugins: [require("remark-math")],
        rehypePlugins: [require("rehype-katex")],
      },
    },
    "@chakra-ui/gatsby-plugin",
  ],
};
