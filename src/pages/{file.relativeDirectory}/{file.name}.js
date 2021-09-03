import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Container,
  Grid,
} from "@chakra-ui/react";
import Layout from "../../components/layout";
import Toc from './Toc'

const Chapter = ({ data, location }) => {
  return (
    <Layout pageTitle={data.file.childMdx.frontmatter.title}>
      <Grid templateColumns="1fr 3fr" mt={8} gap={8}>
        <Toc items={data.file.childMdx.tableOfContents.items} />
        <Container as="article" maxW="container.lg">
          <MDXRenderer>{data.file.childMdx.body}</MDXRenderer>
        </Container>
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    file(id: { eq: $id }) {
      childMdx {
        frontmatter {
          title
        }
        body
        tableOfContents
      }
    }
  }
`;

export default Chapter;
