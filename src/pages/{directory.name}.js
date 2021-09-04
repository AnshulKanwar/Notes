import React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  Link,
  Button,
  Heading,
} from "@chakra-ui/react";

import Layout from "../components/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Subject = ({ data, location }) => {
  const subject = location.state && location.state.subject
  return (
    <Layout pageTitle={subject}>
      <SimpleGrid columns={1} spacing={4}>
        {data.allFile.nodes.map((node) => (
          <Box h="100px" p={5} boxShadow="base">
            <Flex h="100%" align="center" justify="space-between">
              <Flex direction="column" justify="space-between">
                <Heading as="h3" size="1xl" fontWeight="medium">
                  {node.childMdx.frontmatter.title}
                </Heading>
                <Text fontSize="xs" color="gray.500">
                  {node.childMdx.timeToRead} minute
                </Text>
              </Flex>
              <Link
                as={GatsbyLink}
                to={`/${node.childMdx.slug}`}
                state={{
                  subject: subject,
                  chapter: node.childMdx.frontmatter.title,
                }}
                _hover={{ textDecoration: "none" }}
              >
                <Button colorScheme="teal">
                  Read
                  <ChevronRightIcon />
                </Button>
              </Link>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export const query = graphql`
  query ($name: String!) {
    allFile(filter: { relativeDirectory: { eq: $name } }) {
      nodes {
        childMdx {
          frontmatter {
            title
          }
          slug
          timeToRead
        }
      }
    }
  }
`;

export default Subject;
