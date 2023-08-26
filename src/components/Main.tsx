import { Box } from "@chakra-ui/react";
import HistoryGrid from "./HistoryGrid";
import VideoComponent from "./VideoComponent";

interface Props {
  selectedTab: string;
}

const Main = ({ selectedTab }: Props) => {
  return (
    <Box paddingY={"20px"} margin="auto auto">
      {(() => {
        console.log(selectedTab);
        switch (selectedTab) {
          case "History":
            return <HistoryGrid />;
            break;

          default:
            return <VideoComponent />;
        }
      })()}
    </Box>
  );
};

export default Main;
