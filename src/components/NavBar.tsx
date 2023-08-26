import { Box, Divider, HStack, Text } from "@chakra-ui/react";
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
      <HStack justifyContent="space-between" padding="10px">
        <BsHouseDoorFill size="30px" />
        <HStack>
          <HStack marginRight="20px">
            <Text>Kamera</Text>
            <AiFillCamera
              color={data?.camera.connected ? "lightgreen" : "coral"}
            />
          </HStack>
          <HStack>
            <Text>RaspberryPi</Text>
            <FaRaspberryPi
              color={data?.pi.connected ? "lightgreen" : "coral"}
            />
          </HStack>
        </HStack>
        <HStack>
          <Box paddingRight="20px">
            <ColorModeSwitch />
          </Box>
          <TabSelector onSelectTab={onSelectTab} selectedTab={selectedTab} />
        </HStack>
      </HStack>
      <Divider />
    </>
  );
};

export default NavBar;
