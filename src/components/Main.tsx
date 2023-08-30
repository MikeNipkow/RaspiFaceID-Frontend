import { Box } from "@chakra-ui/react";
import HistoryGrid from "./HistoryGrid";
import VideoComponent from "./VideoComponent";
import AuthorizedGrid from "./AuthorizedGrid";
import { config } from "../services/api-client";

interface Props {
  selectedTab: string;
}

const Main = ({ selectedTab }: Props) => {
  return (
    <Box paddingY={"5px"}>
      {(() => {
        switch (selectedTab) {
          case "Zugang":
            return <HistoryGrid />;
            break;

          case "Berechtigung":
            return <AuthorizedGrid />;
            break;

          default:
            return <VideoComponent videoUrl={config.videoUrl} />;
        }
      })()}
    </Box>
  );
};

export default Main;
