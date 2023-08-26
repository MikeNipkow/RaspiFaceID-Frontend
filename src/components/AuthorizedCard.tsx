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
} from "@chakra-ui/react";
import { config } from "../services/api-client";
import { Authorized } from "../hooks/useAuthorized";

interface Props {
  authorized: Authorized;
  onDelete: () => void;
}

const AuthorizedCard = ({ authorized, onDelete }: Props) => {
  return (
    <Card>
      <CardHeader paddingBottom="0">
        <Image
          borderRadius={"6px"}
          src={`${config.apiBaseUrl}/authorized/${authorized.file}`}
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
            <Text fontWeight="bold">{authorized.name} </Text>
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

export default AuthorizedCard;
