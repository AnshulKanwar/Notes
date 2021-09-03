import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import { Box, Heading, Flex, Text, Link } from "@chakra-ui/react";
import components from "./MDXLayout";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <MDXProvider components={components}>
      <Box>
        <Box maxW="960px" mx="auto">
          <title>
            {pageTitle} | {data.site.siteMetadata.title}
          </title>
          <Flex my={5}>
            <header>
              <Heading as="h1" fontSize="4xl">
                <Link
                  as={GatsbyLink}
                  to="/"
                  _hover={{ textDecoration: "none" }}
                  _focus={{ boxShadow: "none" }}
                >
                  {data.site.siteMetadata.title}
                </Link>
              </Heading>
            </header>
          </Flex>
          <Box as="main" mt={8}>
            <Text fontSize="5xl" fontWeight="bold" color="teal.500" mb={4}>
              {pageTitle}
            </Text>
            {children}
          </Box>
        </Box>
      </Box>
    </MDXProvider>
  );
};

export default Layout;
