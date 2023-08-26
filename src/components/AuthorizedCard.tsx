import {
  Button,
  Card,
  CardBody,
  CardHeader,
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
        <HStack justifyContent="space-between">
          <Text fontWeight="bold">{authorized.name} </Text>
          <Button onClick={onDelete} colorScheme="red">
            Löschen
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default AuthorizedCard;
