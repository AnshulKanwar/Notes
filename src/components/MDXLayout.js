import React from "react";
import {
  Text,
  Heading,
  UnorderedList,
  ListItem,
  ListIcon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import Alert from './Alert'

const shortcodes = { Text, Alert }

const components = {
  ...shortcodes,
  h1: (props) => <Heading as="h1" mt={10} mb={6} size="xl" {...props} />,
  h2: (props) => <Heading as="h2" mt={5} mb={4} size="md" {...props} />,
  h3: (props) => <Heading as="h3" mt={5} mb={4} size="sm" {...props} />,
  ul: (props) => <UnorderedList {...props} styleType="none" />,
  li: (props) => (
    <ListItem {...props}>
      <ListIcon as={ChevronRightIcon} />
      {props.children}
    </ListItem>
  ),
  table: (props) => (
    <Table my={4} {...props}>
      {props.children}
    </Table>
  ),
  thead: (props) => <Thead {...props} />,
  tbody: (props) => <Tbody {...props} />,
  tr: (props) => <Tr {...props} />,
  th: (props) => <Th {...props} />,
  td: (props) => <Td {...props} />,
};

export default components;
