import { Image } from "@chakra-ui/react";

interface Props {
  videoUrl: string;
}

const VideoComponent = ({videoUrl}: Props) => {


  return (
    <Image
      margin={"auto auto"}
      maxHeight={{ base: "90vh", sm: "80vh", lg: "90vh" }}
      borderRadius={"10px"}
      src={videoUrl}
    />
  );
};

export default VideoComponent;
