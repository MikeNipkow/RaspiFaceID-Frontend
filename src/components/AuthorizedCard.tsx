import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { config } from "../services/api-client";
import { Authorized } from "../hooks/useAuthorized";
import { useState } from "react";

interface Props {
  authorized: Authorized;
  onDelete: () => void;
}

const AuthorizedCard = ({ authorized, onDelete }: Props) => {
  const [loading, setLoading] = useState(true);
  
  return (
    <Card>
      <CardHeader paddingBottom="0" margin="auto">
        {loading && <Skeleton height="200px" />}
        <Image maxHeight="200px" width="auto"
          borderRadius={"6px"}
          onLoad={() => setLoading(false)}
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
