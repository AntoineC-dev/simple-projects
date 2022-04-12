import * as React from "react";
import { ChakraProvider, VStack, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher, CreateTaskInput, FiltersBar, Tasks } from "./components";
import { useTasks } from "./store";

export const App = () => {
  const tasks = useTasks();
  return (
    <ChakraProvider theme={theme}>
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8} w="100%" maxW="container.sm" justifySelf="center">
          <CreateTaskInput />
          {tasks.length !== 0 && <FiltersBar />}
          <Tasks />
        </VStack>
      </Grid>
    </ChakraProvider>
  );
};
