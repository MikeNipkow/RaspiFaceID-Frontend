import { Image } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  videoUrl: string;
}

const VideoComponent = ({videoUrl}: Props) => {
  const [url, setUrl] = useState(videoUrl)
  const updateUrl = () => setUrl(videoUrl + "?" + Math.random())
  setInterval(updateUrl, 30000)


  return (
    <Image
      margin={"auto auto"}
      maxHeight={{ base: "90vh", sm: "80vh", lg: "90vh" }}
      borderRadius={"10px"}
      src={url}
    />
  );
};

export default VideoComponent;
