import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export const Tabs = ["Video", "Zugang", "Berechtigung"];

export interface Props {
  onSelectTab: (tab: string) => void;
  selectedTab: string | null;
}

const TabSelector = ({ onSelectTab, selectedTab }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button}>
        <AiOutlineMenu />
      </MenuButton>
      <MenuList>
        {Tabs.map((tab) => (
          <MenuItem
            fontWeight={tab === selectedTab ? "bold" : "normal"}
            textDecoration={tab === selectedTab ? "underline" : "normal"}
            onClick={() => onSelectTab(tab)}
            key={tab}
          >
            {tab}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TabSelector;
