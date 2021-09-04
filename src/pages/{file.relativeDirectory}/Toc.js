import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, Heading, ListItem, OrderedList, Link } from "@chakra-ui/react";

const TocList = ({ items }) => {
  return (
    <OrderedList listStyleType="none">
      {items.map((item) => (
        <ListItem>
          <Link
            as={GatsbyLink}
            to={item.url}
            color="gray.500"
            fontSize="sm"
            fontWeight="semibold"
            _hover={{ textDecoration: "none", color: "gray.800" }}
            _focus={{ boxShadow: "none" }}
          >
            {item.title}
          </Link>
          {item.items && <TocList items={item.items} />}
        </ListItem>
      ))}
    </OrderedList>
  );
};

const Toc = ({ items }) => {
  return (
    <Box as="nav" mt={12}>
      <Heading as="h2" fontSize="md" mb={2}>
        In This Chapter
      </Heading>
      {items && <TocList items={items} />}
    </Box>
  );
};

export default Toc;
