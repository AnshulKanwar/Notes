import React from "react";
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from "@chakra-ui/react";

const Alert = ({ status, title, children }) => {
  return (
    <ChakraAlert status={status} variant="left-accent">
      <AlertIcon mr={4}/>
      <Box>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription style={{ whiteSpace: "pre-line" }}>
          {children}
        </AlertDescription>
      </Box>
    </ChakraAlert>
  );
};

export default Alert;
