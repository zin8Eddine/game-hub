import { Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "asid main"`,
        }}
      >
        <GridItem area={"nav"} bg="red">
          nav
        </GridItem>
        <Show above="lg">
          <GridItem area={"asid"} bg="yellow">
            asid
          </GridItem>
        </Show>
        <GridItem area={"main"} bg="blue">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
