import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

 export interface GameQuery{
  genre:Genre | null
  platform:Platform |null
  
}

function App() {

    const [gameQuery,setGameQuery]= useState<GameQuery>({} as GameQuery)

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "asid main"`,
        }}
        templateColumns={{
          base: "1fr",

          lg: "240px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"asid"} paddingX={5}>
            <GenreList
              selectedGenre={gameQuery?.genre}
              onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector
            selectedPlatform={gameQuery?.platform}
            onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})}
          />
          <GameGrid  gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
