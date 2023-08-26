import { Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react";
import { History } from "../hooks/useHistory";
import { config } from "../services/api-client";

interface Props {
  history: History;
}

const HistoryCard = ({ history }: Props) => {
  return (
    <Card>
      <CardHeader margin="auto" paddingBottom="0">
        <Image
          borderRadius={"6px"}
          src={`${config.apiBaseUrl}${history.endpoint}`}
        />
      </CardHeader>
      <CardBody>
        <Text fontWeight="bold" textAlign={"center"}>{`${history.name} 
                am ${history.timestamp.day}.${history.timestamp.month}.${history.timestamp.year} 
                um ${history.timestamp.hour}:${history.timestamp.minute}:${history.timestamp.second} Uhr`}</Text>
      </CardBody>
    </Card>
  );
};

export default HistoryCard;
