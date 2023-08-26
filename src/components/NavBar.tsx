import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Show,
  Text,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
import { FaRaspberryPi } from "react-icons/fa";
import { BsHouseDoorFill } from "react-icons/bs";
import ColorModeSwitch from "./ColorModeSwitch";
import useInfo from "../hooks/useInfo";
import TabSelector, { Props } from "./TabSelector";

const NavBar = ({ onSelectTab, selectedTab }: Props) => {
  const { data } = useInfo();

  return (
    <>
      <Grid
        paddingY="5px"
        justifyContent="center"
        templateColumns="repeat(3, 1fr)"
        alignItems={"center"}
      >
        <GridItem>
          <BsHouseDoorFill size="30px" />
        </GridItem>
        <GridItem>
          <HStack justifyContent={"center"}>
            <HStack marginRight="20px">
              <Show above="lg">
                <Text>Kamera</Text>
              </Show>
              <AiFillCamera
                color={data?.camera.connected ? "lightgreen" : "coral"}
              />
            </HStack>
            <HStack>
              <Show above="lg">
                <Text>Raspberry Pi</Text>
              </Show>
              <FaRaspberryPi
                color={data?.pi.connected ? "lightgreen" : "coral"}
              />
            </HStack>
          </HStack>
        </GridItem>
        <GridItem>
          <HStack float="right">
            <Box paddingRight="20px">
              <ColorModeSwitch />
            </Box>
            <TabSelector onSelectTab={onSelectTab} selectedTab={selectedTab} />
          </HStack>
        </GridItem>
      </Grid>
      <Divider />
    </>
  );
};

export default NavBar;
