import { Divider, Grid, GridItem } from "@chakra-ui/react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { Tabs } from "./components/TabSelector";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState(Tabs[0]);

  return (
    <Grid
      minHeight={"100vh"}
      overflow={"hidden"}
      paddingX="10px"
      templateAreas={{ base: `"nav" "main"` }}
      templateColumns={{ base: "1fr" }}
      templateRows={"50px auto"}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSelectTab={(tab) => setSelectedTab(tab)}
          selectedTab={selectedTab}
        />
      </GridItem>
      <GridItem area={"main"}>
        <Main selectedTab={selectedTab} />
      </GridItem>
    </Grid>
  );
}

export default App;
