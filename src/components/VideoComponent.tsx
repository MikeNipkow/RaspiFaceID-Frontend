import { Image } from "@chakra-ui/react";
import { config } from "../services/api-client";

const VideoComponent = () => {
  return (
    <Image
      maxHeight={{ base: "90vh", sm: "80vh", lg: "90vh" }}
      borderRadius={"20px"}
      src={config.videoUrl}
    />
  );
};

export default VideoComponent;
