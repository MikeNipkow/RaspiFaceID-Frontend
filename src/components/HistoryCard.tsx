import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
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
      <CardHeader paddingBottom="0" margin="auto">
        <Image
          borderRadius={"6px"}
          src={`${config.apiBaseUrl}/history/${history.file}`}
        />
      </CardHeader>
      <CardBody>
        <Grid
          templateAreas={{ base: `"info" "button"`, lg: `"info button"` }}
          gap={3}
        >
          <GridItem
            textAlign={{ base: "center", lg: "left" }}
            lineHeight={"1.2"}
            margin={{ base: "auto auto", lg: "auto auto auto 0" }}
          >
            <Text fontWeight="bold">{history.name} </Text>
            <Text opacity="0.6">
              {`${history.timestamp.day}.${history.timestamp.month}.${history.timestamp.year} ${history.timestamp.hour}:${history.timestamp.minute}:${history.timestamp.second} Uhr`}
            </Text>
          </GridItem>
          <GridItem margin={{ base: "auto auto", lg: "auto 0 auto auto" }}>
            <Button onClick={onDelete} colorScheme="red">
              Löschen
            </Button>
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default HistoryCard;
