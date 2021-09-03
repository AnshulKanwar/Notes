import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, SimpleGrid, Flex, Text, Link, Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import Layout from "../components/layout";
import Subjects from "../subjects.json";

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome!">
      <SimpleGrid columns={2} spacing="40px">
        {Subjects.map((subject) => (
          <Box height="100px" p={5} boxShadow="base">
            <Flex justify="space-between" align="center" h="100%">
              <Text>{subject.name}</Text>
              <Link
                as={GatsbyLink}
                to={subject.url}
                state={{ subject: subject.name }}
                _hover={{ textDecoration: "none" }}
              >
                <Button colorScheme="teal">
                  Go!
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

export default IndexPage;
