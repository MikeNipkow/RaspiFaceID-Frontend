import {
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { History } from "../hooks/useHistory";
import { config } from "../services/api-client";

interface Props {
  history: History;
  onDelete: () => void;
}

const HistoryCard = ({ history, onDelete }: Props) => {
  return (
    <Card>
      <CardHeader paddingBottom="0">
        <Image
          borderRadius={"6px"}
          src={`${config.apiBaseUrl}/history/${history.file}`}
        />
      </CardHeader>
      <CardBody>
        <HStack justifyContent="space-between">
          <VStack lineHeight="1rem" alignItems="flex-start">
            <Text fontWeight="bold">{history.name} </Text>
            <Text opacity="0.6">
              {`${history.timestamp.day}.${history.timestamp.month}.${history.timestamp.year} ${history.timestamp.hour}:${history.timestamp.minute}:${history.timestamp.second} Uhr`}
            </Text>
          </VStack>
          <Button onClick={onDelete} colorScheme="red">
            Löschen
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default HistoryCard;
