import * as React from "react";
import { ChakraProvider, Text, theme } from "@chakra-ui/react";
import SimpleSidebar from "./components/MySideBar";
import { TestSidebar } from "./components/TestSidebar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <TestSidebar>
      <>Content Here</>
    </TestSidebar>
  </ChakraProvider>
);
